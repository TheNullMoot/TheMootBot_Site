// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TheMootBot's Site",

  //TODO randomize this text in the future
  tagline: 'The best discord bot the works most of the time',
  
  
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://thenullmoot.github.io/',
  baseUrl: '/TheMootBot_Site/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TheNullMoot', // Usually your GitHub org/user name.
  projectName: 'TheMootBot_Site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/botIcon.png',
      navbar: {
        title: "TheMootBot's Site",
        logo: {
          alt: "TheMootBot's Logo",
          src: 'img/botIcon.png',
        },
        items: [
          {
            href: '/docs/games',
            label: 'Games',
            position: 'left',
          },
          {
            href: '/docs/mention',
            label: 'Mention',
            position: 'left',
          },
          {
            href: '/docs/mod',
            label: 'Mod',
            position: 'left',
          },
          {
            href: '/docs/multiple',
            label: 'Multiple',
            position: 'left',
          },
          {
            href: '/docs/text',
            label: 'Text',
            position: 'left',
          },
          {
            href: '/docs/utility',
            label: 'Utility',
            position: 'left',
          },
          {
            href: '/docs/voice',
            label: 'Voice',
            position: 'left',
          },
          {
            href: '/docs/voice%20multiple',
            label: 'Voice Multiple',
            position: 'left',
          },
          {
            href: 'https://github.com/TheNullMoot',
            label: 'TheNullMoot',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} TheMootBot's Site. Built by TheNullMoot.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
