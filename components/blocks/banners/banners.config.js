module.exports = {
  title: 'Banners',
  status: 'wip',
  context: {
    image: '/images/banners/banner-1_1170_300.png',
    image480: '/images/banners/banner-1_480_246.png',
    image768: '/images/banners/banner-1_768_300.png',
    image992: '/images/banners/banner-1_992_254.png',
    pretitle: 'Banner subtitle text here',
    title: 'Banner title here',
    date: '01. 10. 2016 – 31. 01. 2017',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales iaculis magna, ',
    link: '#',
    linkAnchor: 'Details',
    buttonVersion: 'light',
    bgLeftText: 'Action',
    showContent: true
  },
  variants: [
    {
      name: 'Simple',
      context: {
        modifier: 'simple',
        image: '/images/banners/banner-1_1170_300.png',
        image480: '/images/banners/banner-1_480_246.png',
        image768: '/images/banners/banner-1_768_300.png',
        image992: '/images/banners/banner-1_992_254.png',
        bgLeftText: false,
        showContent: false
      }
    },
    {
      name: 'Top Image',
      context: {
        modifier: 'topimage',
        imageModifier: 'topimage',
        contentModifier: 'topimage',
        image: '/images/banners/banner-2_1032_224.png',
        image480: '/images/banners/banner-2_480_104.png',
        image768: '/images/banners/banner-2_768_166.png',
        image992: '/images/banners/banner-2_992_215.png',
        pretitle: false,
        title: 'Title goes here',
        date: false,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales iaculis magna, vitae pharetra sem ornare eu. Nam et consequat dolor, vitae vestibulum erat.',
        link: '#',
        linkAnchor: 'See more',
        bgLeftText: false
      }
    },
    {
      name: 'Full Width',
      context: {
        modifier: 'fullwidth',
        image: '/images/banners/banner-3_1200_629.png',
        image480: '/images/banners/banner-3_480_480.png',
        image768: '/images/banners/banner-3_768_402.png',
        image992: '/images/banners/banner-3_500_783.png',
        image1600: '/images/banners/banner-3_2290_1200.png',
        pretitle: 'subtitle goes',
        title: 'Title goes here',
        date: false,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales iaculis magna, vitae pharetra sem ornare eu. Nam et consequat dolor, vitae vestibulum erat.',
        link: '#',
        linkAnchor: 'See more',
        buttonVersion: 'dark',
        bgLeftText: false
      }
    },
    {
      name: '50-width',
      context: {
        modifier: '50-width',
        image: '/images/banners/banner-4_650_450.png',
        image480: '/images/banners/banner-4_320_450.png',
        image768: '/images/banners/banner-4_650_450.png',
        image992: false,
        pretitle: false,
        title: 'Title goes here',
        date: false,
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
        link: '#',
        linkAnchor: 'See more',
        buttonVersion: 'icon',
        bgLeftText: false
      }
    },
  ]
};
