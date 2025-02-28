// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const organizationName = 'analogjs';
const projectName = 'analog';
const title = 'Analog';
const url = `https://analogjs.org`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: '/',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  organizationName,
  plugins: [],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/apps/docs-app/docs`,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  projectName,
  tagline: 'The fullstack Angular meta-framework',
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: 'img/logos/analog-logo.svg',
      footer: {
        style: 'dark',
        logo: {
          alt: 'Analog logo',
          href: '/',
          src: 'img/logos/analog-logo.svg',
        },
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: 'docs',
              },
              {
                label: 'Getting Started',
                to: 'docs/getting-started',
              },
            ],
          },
          {
            title: 'Open source',
            items: [
              {
                label: 'Contributors',
                to: 'docs/contributors',
              },
              {
                label: 'Contributing',
                to: 'docs/contributing',
              },
              {
                label: 'Sponsoring',
                to: 'docs/sponsoring',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: `https://github.com/${organizationName}/${projectName}`,
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/analogjs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Analog. Licensed under MIT.`,
      },
      navbar: {
        title,
        logo: {
          alt: 'Analog logo',
          src: 'img/logos/analog-logo.svg',
        },
        items: [
          {
            activeBasePath: 'docs',
            label: 'Docs',
            position: 'left',
            to: 'docs',
          },
          {
            href: `https://github.com/${organizationName}/${projectName}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        defaultLanguage: 'typescript',
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  title,
  // GitHub Pages adds a trailing slash to Docusaurus URLs by default.
  trailingSlash: false,
  url,
};

module.exports = config;
