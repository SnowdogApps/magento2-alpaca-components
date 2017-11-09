module.exports = {
  context: {
    labelText: 'Your file (pdf, doc, max 1 MB)',
    input: {
      id: 'file',
      type: 'file',
      name: 'uploadCv',
      formats: '.pdf,.doc,.png',
      size: '1024'
    },
    fileName: 'File not choosen',
    button: {
      tag: 'button',
      class: 'file-upload__button',
      attributes: 'type="button"',
      text: 'Upload a file'
    }
  }
}
