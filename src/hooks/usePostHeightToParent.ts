import { useEffect } from 'react';

export const usePostHeightToParent = (targetOrigin = '*') => {
  useEffect(() => {
    function sendHeightToParent() {
      const messageData = {
        height: document.documentElement.scrollHeight,
      };
      window.parent.postMessage(JSON.stringify(messageData), targetOrigin);
    }

    sendHeightToParent();
  }, [targetOrigin]);

  return null;
}
