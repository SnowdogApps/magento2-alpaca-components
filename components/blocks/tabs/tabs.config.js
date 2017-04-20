module.exports = {
    title: 'Tabs component',
    status: 'wip',
    context: {
        tabs: [
            {
                tabId: 'tab-1',
                title: 'Tab title',
                contentList: true,
                content: [
                    {
                        label: 'Label 1',
                        value: 'value 1'
                    },
                    {
                        label: 'Store 2',
                        value: 'available'
                    },
                    {
                        label: 'Store 3',
                        value: 'available'
                    }
                ],
                active: true
            },
            {
                tabId: 'tab-2',
                title: 'Tab title 2',
                contentList: false,
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum neque nisi, sed molestie leo rutrum sed.'
            },
            {
                tabId: 'tab-3',
                title: 'Tab title 3',
                contentList: true,
                content: [
                    {
                        label: 'Label 1',
                        value: 'value 1'
                    },
                    {
                        label: 'Label 2',
                        value: 'value 2'
                    },
                    {
                        label: 'Label 3',
                        value: 'value 3'
                    }
                ]
            }
        ]
    },
    variants: [
        {
            name: 'Product view tabs',
            context: {
                modifier: 'product-view'
            }
        }
    ]
}
