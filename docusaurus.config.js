module.exports = {
  title: 'DatePoll Systems',
  tagline: 'Digitalizing procedures in various application areas',
  url: 'https://datepoll.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logos/favicon.ico',
  organizationName: 'DatePoll Systems', // Usually your GitHub org/user name.
  projectName: 'DatePoll-Home', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DatePoll',
      logo: {
        alt: 'DatePoll Logo',
        src: 'img/logos/datepoll.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://gitlab.com/DatePoll',
          label: 'GitLab',
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
