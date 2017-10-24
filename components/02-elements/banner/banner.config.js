module.exports = {
  context: {
    image: {
      defaultSrc: '/images/banner/banner-480_480.png',
      sources: [
        {
          src: '/images/banner/banner-480_480.png',
          mediaQuery: '(max-width: 480px)'
        },
        {
          src: '/images/banner/banner-768_402.png',
          mediaQuery: '(max-width: 768px)'
        },
        {
          src: '/images/banner/banner-992_254.png',
          mediaQuery: '(max-width: 992px)'
        },
        {
          src: '/images/banner/banner-1170_300.png',
          mediaQuery: ''
        }
      ]
    }
  }
};
