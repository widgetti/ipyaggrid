module.exports = {
    title: 'ipyaggrid',
    description: 'Using ag-Grid interactively in a Jupyter notebook',
    base: '/ipyaggrid/', // Comment if in dev mode
    dest: '../public',
    head: [['link', { rel: 'icon', href: '/favicon-16x16.png' }]],
    // serviceWorker: true,
    themeConfig: {
        algolia: {
            apiKey: 'fd3694c4c215531b2b8b966520ce657e',
            indexName: 'ipyaggrid'
        },
        
        repo: 'https://github.com/widgetti/ipyaggrid',
        editLinks: false,
        editLinkText: 'Edit this page on GitLab',
        lastUpdated: 'Last Updated',
        nav: [
            {
                text: 'Overview',
                link: '/overview/purpose',
            },
            {
                text: 'User Guide',
                link: '/guide/install',
            },
            {
                text: 'Development',
                link: '/dev/dev_install',
            },
        ],
        sidebarDepth: 5,
        sidebar: [
            {
                title: 'Overview',
                collapsable: false,
                children: ['/overview/purpose', '/overview/ag-Grid'],
            },
            {
                title: 'User Guide',
                collapsable: false,
                children: [
                    // '',
                    '/guide/install',
                    '/guide/create',
                    '/guide/customize',
                    '/guide/export',
                ],
            },
            {
                title: 'Developer',
                collapsable: false,
                children: [
                    '/dev/dev_install',
                    '/dev/publish',
                    '/dev/doc',
                    '/dev/structure',
                ],
            },
        ],
    },
    markdown: {
        lineNumbers: false,
    },
};
