module.exports = {
  context: {
    url: '/images/banner/banner-480_480.png'
  },
  variants: [
    {
      name: 'picture',
      context: {
        defaultSrc: '/images/banner/banner-480_480.png',
        sources: [
          {
            url: '/images/banner/banner-480_480.png',
            mediaQuery: '(max-width: 480px)'
          },
          {
            url: '/images/banner/banner-768_402.png',
            mediaQuery: '(max-width: 768px)'
          },
          {
            url: '/images/banner/banner-992_254.png',
            mediaQuery: '(max-width: 992px)'
          },
          {
            url: '/images/banner/banner-1170_300.png',
            mediaQuery: ''
          }
        ]
      }
    }
  ]
};
