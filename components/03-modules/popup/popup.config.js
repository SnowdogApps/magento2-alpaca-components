module.exports = {
  context: {
    class: '',
    popupId: 'popup-1',
    content: 'button',
    popupTrigger: true,
    buttonClose: {
      tag: 'button',
      text: '',
      class: 'button--icon popup__close-button',
      iconId: 'close',
      iconClass: 'button__icon popup__close-button-icon',
      attributes: 'type="button" aria-label="close popup button, click to close the popup"'
    },
    script: true
  }
};
