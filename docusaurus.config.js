const math = require('remark-math');
const katex = require('rehype-katex');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { i18n } = require('./config');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Keystone',
  tagline: 'Keystone are cool',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://guide.keyst.one/',
  baseUrl: '/',
  organizationName: 'KeystoneHQ',
  projectName: 'Keystone support',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: i18n.en,
    locales: [i18n.en, i18n.zh], // ['en', 'zh-Hant', 'ko'],
  },
  scripts: [
    {
      src: '/_vercel/insights/script.js',
      defer: true,
    }
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'],
        createRedirects(routePath) {
          return [];
        },
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'Keystones', content: 'blog, Tutorial, get started'}, {name: 'google-site-verification', content: 'YKTbN9g_Gp83YNkR4_dtNbmbV91qNlmSFKe6sBNJdds'}],
      image: 'img/social-card.jpg',
      staticDirectories: ['static'],
      navbar: {
        logo: {
          alt: 'Keystone Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
          href: 'https://keyst.one/',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://support.keyst.one/',
            label: 'Keystone Gen 2',
            position: 'right',
          },
          {
            href: 'https://keystonewallet.atlassian.net/servicedesk/customer/portal/1',
            label: 'Contact Us',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/KeystoneWallet',
                [i18n.zh]: {
                  href: 'http://t.me/KeystoneWalletCN',
                }
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCaReIdawwYPPcyWGoNunF7g',
              },
              {
                label: 'Discord',
                href: 'https://keyst.one/discord',
                [i18n.zh]: {
                  href: 'https://keyst.one/DC',
                }
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/KeystoneWallet',
                [i18n.zh]: {
                  href: 'https://twitter.com/KeystoneCN',
                }
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.keyst.one',
                [i18n.zh]: {
                  href: 'https://mirror.xyz/keystonecn.eth',
                }
              },
              {
                label: 'GitHub',
                href: 'https://github.com/KeystoneHQ',
              },
            ],
          },
        ],
        copyright: `Keystone © All rights reserved 2018 - ${new Date().getFullYear()}`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  onBrokenLinks: 'warn',
};

module.exports = config;
