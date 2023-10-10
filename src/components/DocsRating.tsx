/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { useState, useMemo } from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import { doc, updateDoc, increment, setDoc } from "firebase/firestore";
import { firestore } from '../plugins/firebase';
import { translate } from '@docusaurus/Translate';
import EditIcon from '@site/static/img/edit.svg';
import HappyIcon from '@site/static/img/ratings/happy.svg';
import MediumIcon from '@site/static/img/ratings/medium.svg';
import BadIcon from '@site/static/img/ratings/bad.svg';

const DocsRating = ({ label }) => {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }
  const { metadata } = useDoc();

  const [voteValue, setVoteValue] = useState(null);
  const giveFeedback = (value: string) => {
    const docRef = doc(firestore, 'docs', metadata.title);
    setDoc(docRef, {}, { merge: true }).then(() => {
      const docRatingRef = doc(firestore, "docs", metadata.title);
      updateDoc(docRatingRef, {
        path: metadata.permalink,
        editTime: new Date(),
        [value]: increment(1)
      });
    });

    setVoteValue(value);
  };

  const formHref = useMemo(() => `https://docs.google.com/forms/d/e/1FAIpQLScs4qDvah9XsxYEEcnELQmn10uU52SgkFVvr4TBmrsPJZKS0g/viewform?usp=pp_url&entry.1011131940=${metadata.title + ' | ' + metadata.permalink}`, [metadata.title])

  if (voteValue === 'bad') {
    return <div className="docsRating bad-reasons">
      <span className="text-right">
        {translate({
          id: 'docs.footer.ratings.bad.question'
        })}
      </span>
      <div className="bad-selections">
        <div className="select-box" onClick={() => giveFeedback('outdated')}>
          {translate({ id: 'docs.footer.ratings.bad.selection.outdated' })}
        </div>
        <div className="select-box" onClick={() => giveFeedback('Cannot proceed according')}>
          {translate({ id: 'docs.footer.ratings.bad.selection.cannotAccording' })}
        </div>
        <a href={formHref} target="_blank">
          <div className="select-box" onClick={() => setVoteValue('other')}>
            <EditIcon />
            {translate({ id: 'docs.footer.ratings.bad.selection.other' })}
          </div>
        </a>
      </div>
    </div>
  }

  return (
    <div className="docsRating">
      {voteValue !== null ? (
        <span>{translate({ id: 'docs.footer.ratings.thankyou' })}</span>
      ) : (
        <>
          <span>{translate({ id: 'docs.footer.ratings.title' })}</span>
          <div className="vote-box">
            <HappyIcon onClick={() => giveFeedback('like')} />
            <MediumIcon onClick={() => giveFeedback('medium')} />
            <BadIcon onClick={() => giveFeedback('bad')} />
          </div>
        </>
      )}
    </div>
  );
};

export default DocsRating;
