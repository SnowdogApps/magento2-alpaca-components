module.exports = {
  context: {
    wrapper: {
      labelTag: 'h2',
      labelText: 'My account',
      labelIcon: 'arrow-down',
      additionalLabelClass: 'heading heading--fourth-level',
      content: 'account-navigation',
      contentContext: {
        navItems: [
          {
            item: 'Account dashboard'
          },
          {
            item: 'Account information'
          },
          {
            item: 'Address book',
            current: 'current'
          },
          {
            item: 'My orders'
          },
          {
            item: 'Newsletter Subscriptions'
          },
          {
            item: 'My Product Reviews'
          },
          {
            item: 'My Wish List'
          }
        ]
      },
      class: 'dropdown-container--open-wide',
      additionalClass: 'account-nav'
    },
    selectRegion: {
      selectId: 'region',
      options: [
        {
          value: '',
          text: 'Please select a region, state or province.'
        },
        {
          value: '1',
          text: 'Alabama'
        },
        {
          value: '2',
          text: 'Alaska'
        },
        {
          value: '3',
          text: 'Arizona'
        },
        {
          value: '4',
          text: 'California'
        },
        {
          value: '5',
          text: 'Colorado'
        },
        {
          value: '6',
          text: 'Florida'
        },
        {
          value: '7',
          text: 'Georgia'
        },
      ]
    },
    selectCountry: {
      selectId: 'country',
      options: [
        {
          value: '',
          text: 'Choose country'
        },
        {
          value: 'AF',
          text: 'Afghanistan'
        },
        {
          value: 'DZ',
          text: 'Algeria'
        },
        {
          value: 'BS',
          text: 'Bahamas'
        },
        {
          value: 'BR',
          text: 'Brazil'
        },
        {
          value: 'CL',
          text: 'Chile'
        },
        {
          value: 'FR',
          text: 'France'
        },
      ]
    },
    inputPrefix: {
      class: 'form__field required users-account__field-short',
      inputId: 'prefix',
      label: {
        text: 'Prefix',
      },
      field: {
        placeholder: ''
      }
    },
    inputFirstName: {
      attribute: '',
      class: 'form__field required',
      inputId: 'firstname',
      label: {
        text: 'First Name',
      },
      field: {
        class: 'required-entry',
        placeholder: 'First name'
      }
    },
    inputLastName: {
      attribute: '',
      class: 'form__field required',
      inputId: 'lastname',
      label: {
        text: 'Last Name',
      },
      field: {
        class: 'required-entry',
        placeholder: 'Last name'
      }
    },
    inputCompany: {
      attribute: '',
      class: 'form__field',
      inputId: 'company',
      label: {
        text: 'Company',
      },
      field: {
        class: '',
        placeholder: 'Company'
      }
    },
    inputPhone: {
      attribute: '',
      class: 'form__field',
      inputId: 'telephone',
      label: {
        text: 'Phone Number',
      },
      field: {
        class: '',
        placeholder: 'Phone Number'
      }
    },
    inputFax: {
      attribute: '',
      class: 'form__field',
      inputId: 'fax',
      label: {
        text: 'Fax',
      },
      field: {
        class: '',
        placeholder: 'Fax'
      }
    },
    inputStreet: {
      attribute: '',
      class: 'form__field',
      inputId: 'street',
      label: {
        text: 'Street 1 Address',
      },
      field: {
        class: '',
        placeholder: 'Street Address'
      }
    },
    inputStreet2: {
      attribute: '',
      class: 'form__field',
      inputId: 'street2',
      label: {
        text: 'Street 2 Address',
      },
      field: {
        class: '',
        placeholder: 'Street Address'
      }
    },
    inputVatNumber: {
      class: 'form__field',
      inputId: 'taxvat',
      label: {
        text: 'Tax/VAT number',
      },
      field: {
        placeholder: 'Tax/VAT number'
      }
    },
    inputCity: {
      class: 'form__field',
      inputId: 'city',
      label: {
        text: 'City',
      },
      field: {
        placeholder: 'City'
      }
    },
    actionsToolbar: {
      class: 'users-account__actions',
      buttons: [
        {
          tag: 'a',
          class: 'users-account__button',
          attributes: 'href="#"',
          text: 'Go back'
        },
        {
          tag: 'button',
          class: 'users-account__button-primary',
          attributes: 'type="button"',
          text: 'Save Address'
        }
      ]
    }
  }
}
