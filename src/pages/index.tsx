import React from 'react';
import { Redirect } from '@docusaurus/router';
import { usePostHeightToParent } from '@site/src/hooks/usePostHeightToParent';

function Home() {
  usePostHeightToParent();

  return <Redirect to="/docs/introduction" />;
}

export default Home;