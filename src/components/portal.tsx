import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Portal() {
  const url = useBaseUrl('/docs/introduction');
  return <Redirect to={url} />;
}

export default Portal;