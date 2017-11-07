module.exports = {
  context: {
    action: {
      sides: [
        {
          action: [
            {
              title: 'Back'
            }
          ]
        }
      ]
    }
  },
  variants: [
    {
      name: 'details',
      context: {
        orderNumber: 'Order #0000003',
        orderStatus: 'Pending',
        orderActions: {
          class: 'dashboard__item',
          sides: [
            {
              action: [
                {
                  title: 'Reorder',
                },
                {
                  title: 'Return'
                }
              ]
            },
            {
              action: [
                {
                  title: 'Print Order'
                }
              ]
            }
          ]
        },
        itemsOrdered: {
          title: 'Items Ordered',
          table: {
            mainTags: [
              {
                mainTag: 'thead',
                rowTags: [
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'th',
                        content: 'Product Name'
                      },
                      {
                        childTag: 'th',
                        content: 'SKU'
                      },
                      {
                        childTag: 'th',
                        content: 'Price'
                      },
                      {
                        childTag: 'th',
                        content: 'Qty'
                      },
                      {
                        childTag: 'th',
                        content: 'Subtotal'
                      }
                    ]
                  },
                ]
              },
              {
                mainTag: 'tbody',
                rowTags: [
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Product Name:"',
                        content: 'Stellar Solar Jacket, Color RED, Size L'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="SKU:"',
                        content: 'WJ01-L-RED'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Price:"',
                        content: '$ 55.00'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Qty:"',
                        content: 'Ordered: 1, Shipped: 1'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Subtotal:"',
                        content: 'Subtotal: $ 55.00'
                      }
                    ]
                  },
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Prroduct Name:"',
                        content: 'Example product'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="SKU:"',
                        content: '233-LV04'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Price:"',
                        content: '$ 5.00'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Qty:"',
                        content: 'Ordered: 1'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Subtotal:"',
                        content: '$ 5.00'
                      }
                    ]
                  }
                ]
              },
              {
                mainTag: 'tfoot',
                rowTags: [
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'Subtotal',
                        childTagAttributes: 'colspan="4"'
                      },
                      {
                        childTag: 'td',
                        content: '$ 60.00'
                      }
                    ]
                  },
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'Shipping & Handling',
                        childTagAttributes: 'colspan="4"'
                      },
                      {
                        childTag: 'td',
                        content: '$ 0.00'
                      }
                    ]
                  },
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'Discount',
                        childTagAttributes: 'colspan="4"'
                      },
                      {
                        childTag: 'td',
                        content: '$ 0.00'
                      }
                    ]
                  },
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'Grand Total',
                        childTagAttributes: 'colspan="4"'
                      },
                      {
                        childTag: 'td',
                        content: '$ 60.00'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        invoice: {
          title: 'Invoices',
          link: 'Print Invoice',
          table: {
            mainTags: [
              {
                mainTag: 'thead',
                rowTags: [
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'th',
                        content: 'Product Name'
                      },
                      {
                        childTag: 'th',
                        content: 'SKU'
                      },
                      {
                        childTag: 'th',
                        content: 'Price'
                      },
                      {
                        childTag: 'th',
                        content: 'Qty Invoiced'
                      },
                      {
                        childTag: 'th',
                        content: 'Subtotal'
                      }
                    ]
                  },
                ]
              },
              {
                mainTag: 'tbody',
                rowTags: [
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Product Name:"',
                        content: 'Stellar Solar Jacket, Color RED, Size L'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="SKU:"',
                        content: 'WJ01-L-RED'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Price:"',
                        content: '$ 55.00'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Qty Invoiced:"',
                        content: '1'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Subtotal:"',
                        content: '$ 55.00'
                      }
                    ]
                  },
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Product Name:"',
                        content: 'Example product'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="SKU:"',
                        content: '233-LV04'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Price:"',
                        content: '$ 5.00'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Qty Invoiced:"',
                        content: '1'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Subtotal:"',
                        content: '$ 5.00'
                      }
                    ]
                  }
                ]
              },
              {
                mainTag: 'tfoot',
                rowTags: [
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'Subtotal',
                        childTagAttributes: 'colspan="4"'
                      },
                      {
                        childTag: 'td',
                        content: '$ 60.00'
                      }
                    ]
                  },
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'Discount',
                        childTagAttributes: 'colspan="4"'
                      },
                      {
                        childTag: 'td',
                        content: '$ 0.00'
                      }
                    ]
                  },
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        content: 'Grand Total',
                        childTagAttributes: 'colspan="4"'
                      },
                      {
                        childTag: 'td',
                        content: '$ 60.00'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        orderShipment: {
          title: 'Order Shipments',
          link: 'Print Shipment',
          table: {
            mainTags: [
              {
                mainTag: 'thead',
                rowTags: [
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'th',
                        content: 'Product Name'
                      },
                      {
                        childTag: 'th',
                        content: 'SKU'
                      },
                      {
                        childTag: 'th',
                        content: 'Qty Invoiced'
                      },
                    ]
                  },
                ]
              },
              {
                mainTag: 'tbody',
                rowTags: [
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Product Name:"',
                        content: 'Stellar Solar Jacket, Color RED, Size L'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="SKU:"',
                        content: 'WJ01-L-RED'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Qty Invoiced:"',
                        content: '1'
                      }
                    ]
                  },
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Product Name:"',
                        content: 'Example product'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="SKU:"',
                        content: '233-LV04'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Qty Invoiced:"',
                        content: '1'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        orderInfoTitle: 'Order Information',
        orderInfo: {
          informations: [
            {
              title: 'Shipping Address',
              class: 'grid__column grid__column--1-4',
              text: 'Lorem Ipsum Shipping Address example 1'
            },
            {
              title: 'Shipping Method',
              class: 'grid__column grid__column--1-4',
              text: 'United Parcel Service - Ground'
            },
            {
              title: 'Billing Address',
              class: 'grid__column grid__column--1-4',
              text: 'Lorem Ipsum Billing Address example 1'
            },
            {
              title: 'Payment Method',
              class: 'grid__column grid__column--1-4',
              text: 'Check / Money order'
            }
          ]
        },
        action: {
          sides: [
            {
              action: [
                {
                  title: 'Back to My Orders'
                }
              ]
            }
          ]
        }
      }
    },
    {
      name: 'return',
      context: {
        title: 'New Return for Order #0000003',
        info: {
          informations: [
            {
              class: 'grid__column grid__column--1-2',
              title: 'Order Id',
              text: '#0000003'
            },
            {
              class: 'grid__column grid__column--1-2',
              title: 'Email',
              text: 'test@test.com'
            },
            {
              class: 'grid__column grid__column--1-2',
              title: 'Order Shipping Address',
              text: 'Lorem ipsmum example order shipping address'
            },
            {
              class: 'grid__column grid__column--1-2',
              title: 'Customer Name',
              text: 'Test Test'
            }
          ]
        },
        contactEmailAddress: {
          class: 'dashboard__item',
          field: {
            id: 'email',
            name: 'email',
            placeholder: 'Contact Email Address'
          }
        },
        form: {
          title: 'Return Items Information',
          contentClass: 'grid',
          fields: [
            {
              input: {
                class: 'dashboard-form__divider grid__column grid__column--1-2',
                label: {
                  text: 'Quantity to Return'
                },
                field: {
                  id: 'qtyReturnValue',
                  name: 'qtyReturnValue',
                  placeholder: 'Quantity to Return'
                }
              }
            },
          ],
          selects: [
            {
              select: {
                class: 'dashboard__address grid__column grid__column--1-2 dashboard-form__select',
                label: {
                  text: 'Item',
                },
                options: [
                  {
                    value: 'item1',
                    text: 'Product 1'
                  }
                ]
              }
            },
            {
              select: {
                class: 'dashboard__address grid__column grid__column--1-2 dashboard-form__select',
                label: {
                  text: 'Resolution'
                },
                options: [
                  {
                    value: 'refund',
                    text: 'Refund'
                  },
                  {
                    value: 'exchange',
                    text: 'Exchange'
                  },
                  {
                    value: 'storeCredit',
                    text: 'Store Credit'
                  }
                ]
              }
            },
            {
              select: {
                class: 'dashboard__adddress grid__column grid__column--1-2 dashboard-form__select',
                label: {
                  text: 'Item Condition'
                },
                options: [
                  {
                    value: 'unopened',
                    text: 'Unopened'
                  },
                  {
                    value: 'opened',
                    text: 'Opened'
                  },
                  {
                    value: 'damaged',
                    text: 'Damaged'
                  }
                ]
              }
            },
            {
              select: {
                class: 'dasboard__address grid__column grid__column--1-2',
                label: {
                  text: 'Reasont to Return',
                },
                options: [
                  {
                    value: 'wrongColor',
                    text: 'Wrong Color'
                  },
                  {
                    value: 'wrongSize',
                    text: 'Wrong Size'
                  },
                  {
                    value: 'outOfService',
                    text: 'Out of Service'
                  }
                ]
              }
            }
          ]
        },
        comments: {
          class: 'dashboard__item',
          field: {
            id: 'comments',
            name: 'comments',
            placeholder: 'Comments'
          }
        },
        addReturnItem: {
          class: 'dashboard__item',
          sides: [
            {
              action: [
                {
                  button: true,
                  title: 'Add Item to Return'
                }
              ]
            }
          ]
        },
        action: {
          sides: [
            {
              action: [
                {
                  button: true,
                  title: 'Submit'
                }
              ]
            }
          ]
        }
      }
    }
  ]
}
