const projectsNav = [
    {to: '/projects/datepoll', label: 'DatePoll'},
    {to: '/projects/sif', label: 'LocalSIF'},
    {to: '/projects/wlm', label: 'WaterLevelMonitor'},
    //{to: '/projects/__filename__', label: '__projectName__'},
]


module.exports = {
    title: 'DatePoll Systems',
    tagline: 'Digitalizing procedures in various application areas',
    url: 'https://datepoll.org',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logos/favicon.ico',
    organizationName: 'DatePollSystems',
    projectName: 'Home',
    themeConfig: {
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false
        },
        image: 'img/logos/datepoll-systems.png',  //matatag image (link preview on fb, twitter, ...)
        navbar: {
            title: 'DatePoll Systems',
            logo: {
                alt: 'DatePoll Logo',
                src: 'img/logos/datepoll-systems.svg',
            },
            items: [
                {to: '/', label: 'Home', position: 'left', activeBaseRegex: '^\/$'},
                {
                    label: 'Projects',
                    position: 'left',
                    items: projectsNav,
                },
                //{to: 'blog/', label: 'Blog', position: 'right'},
                {to: 'docs/', label: 'Documentation', position: 'right'},
                {
                    href: 'https://github.com/DatepollSystems',
                    label: 'GitHub',
                    position: 'right',
                    className: 'button button--primary header-gitlab-link'
                },
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
                            to: 'docs/DatePoll/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/Tc5kAH5zhH',
                        },
                        {
                            label: 'Mastodon',
                            href: 'https://voi.social/@DatePoll',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        /*{
                            label: 'Blog',
                            to: 'blog',
                        },*/
                        {
                            label: 'GitHub',
                            href: 'https://github.com/DatePollSystems',
                        },
                        {
                            label: 'Releases',
                            href: 'https://releases.datepoll.org/'
                        },
                        {
                            label: 'NPM',
                            href: 'https://www.npmjs.com/org/datepollsystems'
                        },
                        {
                            label: 'Docker Hub',
                            href: 'https://hub.docker.com/u/datepollsystems'
                        }
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
                    editUrl: 'https://github.com/DatepollSystems/Home/edit/main',
                },
                blog: false,
                /*blog: {
                    editUrl: 'https://github.com/DatepollSystems/Home/edit/main',
                },*/
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
