module.exports = {
  context: {
    class: '',
    contentInfo: {
      class: ''
    },
    image: {
      class: 'additional-content__image',
      defaultSrc: '',
      sources: [
        {
          src: '/images/product-view/banner.jpg',
          mediaQuery: '(min-width: 768px)'
        }
      ],
      alt: 'image alt text'
    },
    firstSection: {
      class: '',
      html: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>'
    },
    secondSection: {
      class: '',
      html: '<p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>'
    }
  }
};
