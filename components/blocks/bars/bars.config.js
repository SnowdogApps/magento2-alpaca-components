module.exports = {
    title: 'Bars',
    status: 'wip',
    context: {
        link: '#',
        linkAnchor: 'Action\'s details',
        closeIcon: 'icon-x',
        text: 'Some action / promotion text',
        modifier: 'top'
    },
    variants: [
        {
            name: 'Cookie bar',
            context: {
                link: '#',
                linkAnchor: 'Details',
                closeIcon: false,
                closeLabel: 'OK, close',
                text: 'This website uses cookies. For information on cookies and how you can disable them see our',
                linkAnchor: 'Cookie Policy.',
                modifier: 'cookie'
            }
        }
    ]
}
