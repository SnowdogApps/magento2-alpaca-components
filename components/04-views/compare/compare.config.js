module.exports = {
  context: {
    heading: {
      tag: 'h1',
      text: 'Compare Products'
    },
    products: [
      {
        name: 'Affirm Water Bottle',
        rating: '60%',
        price: '$7.0',
        img: {
          class: 'compare__image',
          src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
          dataSrc: '/images/banner/banner-480_480.png',
          alt: 'Affirm Water Bottle'
        }
      },
      {
        name: 'Aim Analog Watch',
        rating: '80%',
        price: '$45.0',
        img: {
          class: 'compare__image',
          src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
          dataSrc: '/images/banner/banner-480_480.png',
          alt: 'Aim Analog Watch'
        }
      }
    ],
    attributes: [
      {
        label: 'SKU',
        products: [
          '24-UG06',
          '24-MG04'
        ]
      },
      {
        label: 'Description',
        products: [
          'You\'ll stay hydrated with ease with the Affirm Water Bottle by your side or in hand. Measurements on the outside help you keep track of how much you\'re drinking, while the screw-top lid prevents spills. A metal carabiner clip allows you to attach it to the outside of a backpack or bag for easy access.',
          'Stay light-years ahead of the competition with our Aim Analog Watch. The flexible, rubberized strap is contoured to conform to the shape of your wrist for a comfortable all-day fit. The face features three illuminated hands, a digital read-out of the current time, and stopwatch functions.'
        ]
      },
      {
        label: 'Short Description',
        products: [
          'N/A',
          'N/A'
        ]
      },
      {
        label: 'Activity',
        products: [
          'Yoga, Recreation, Gym, Sports',
          'Outdoor, Recreation, Gym, Sports'
        ]
      }
    ]
  }
}
