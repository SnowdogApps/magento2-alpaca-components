module.exports = {
  context: {
    rating: {
      ariaLabel: 'Average rating 60%',
      star: {
        attributes: 'style="width: 60%"'
      }
    },
    title: 'Lorem Ipsum',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus odio, rutrum a augue nec, varius vehicula odio. Praesent at nibh vehicula libero pellentesque vulputate. Ut malesuada dolor eget purus condimentum, eget porttitor est luctus. Donec tristique, tortor a iaculis mollis, ex erat gravida nunc, quis viverra tortor neque quis eros. Pellentesque lorem sapien, consequat non vestibulum ac, pellentesque vitae risus. Nunc eleifend magna id fringilla semper. </p>',
    date: 'Submitted on August 11, 2017'
  },
  variants: [
    {
      name: 'add',
      context: {
        reviewAmountLink: '#',
        reviewAmount: '2 Reviews',
        addYourLink: '#',
        addYour: 'Add Your Review'
      }
    }
  ]
}
