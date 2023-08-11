import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Portal() {
  const url = useBaseUrl('/docs/category/keystone-gen-3/');
  return <Redirect to={url} />;
}

export default Portal;