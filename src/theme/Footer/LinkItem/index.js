import React, { useMemo } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function FooterLinkItem({ item }) {
  const { to, href, label, prependBaseUrlToHref, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
  const { i18n } = useDocusaurusContext();

  const linkProps = useMemo(() => {
    const normalizeLinkIfNeeded = (t, h) => {
      return (href
        ? {
          href: prependBaseUrlToHref ? normalizedHref : h,
        }
        : {
          to: t,
        })
    }

    const currentLocaleConfig = props?.[i18n.currentLocale];
    if (currentLocaleConfig) {
      return normalizeLinkIfNeeded(currentLocaleConfig.to, currentLocaleConfig.href);
    } else {
      return normalizeLinkIfNeeded(toUrl, href);
    }
  }, [i18n.currentLocale]);

  return (
    <Link
      className="footer__link-item"
      {...linkProps}
      {...props}>
      {label}
      {href && !isInternalUrl(href) && <IconExternalLink />}
    </Link>
  );
}
