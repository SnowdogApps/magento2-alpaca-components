module.exports = {
    title: 'Product grid item',
    status: 'wip',
    context: {
        link: '#somelink',
        name: 'Some product name',
        price: '210$',
        type: 'some attribute text',
        imagesrc: '/images/product/product-img-230_180.png',
        alttext: 'some alt text',
        additionalClass: false,
        modifier: false
    },
    variants: [
        {
            name: 'new flag',
            context: {
                newflag: true
            }
        },
        {
            name: 'cart',
            context: {
                buttonAddToCart: true,
                button: {
                    text: 'Add to Cart',
                    modifier: 'dark',
                    iconId: false,
                    additionalClass: 'product-item__button'
                }
            }
        }
    ]
}
