module.exports = {
  title: 'DatePoll Systems',
  tagline: 'Digitalizing procedures in various application areas',
  url: 'https://datepoll.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logos/favicon.ico',
  organizationName: 'DatePoll Systems',
  projectName: 'DatePoll-Home',
  themeConfig: {
    colorMode: {
      //disable light/darkmode switch
      defaultMode: 'light',
      disableSwitch: true
    },
    image: 'img/logos/datepoll.png',  //matatag image (link preview on fb, twitter, ...)
    navbar: {
      title: 'DatePoll',
      logo: {
        alt: 'DatePoll Logo',
        src: 'img/logos/datepoll.svg',
      },
      items: [
        { to: '/', label: 'Home', position: 'left', activeBaseRegex: '^\/$'},
        {
          label: 'Projects',
          position: 'left',
          to: '/',
          activeBaseRegex: '^\/(datepoll)$',   //show as active only when url in list
          items: [
            { to: '/datepoll', label: 'DatePoll' }
          ]
        },
        { to: 'blog/', label: 'Blog', position: 'right' },
        { to: 'docs/', label: 'Documentation', position: 'right' },
        { href: 'https://gitlab.com/DatePoll', label: 'GitLab', position: 'right', className: 'button button--primary' },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: 'docs/',
            },
            {
              label: 'DatePoll',
              to: 'docs/DatePoll/index',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: '#',
            },
            {
              label: 'Twitter',
              href: '#',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitLab',
              href: 'https://gitlab.com/DatePoll',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} DatePoll, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://gitlab.com/DatePoll/DatePoll-Documentation/edit/master/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://gitlab.com/DatePoll/DatePoll-Documentation/edit/master/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
