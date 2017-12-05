module.exports = {
  context: {
    labelText: 'Your file (pdf, doc, max 1 MB)',
    fileName: 'File not choosen',
    id: 'file',
    input: {
      name: 'upload-cv',
      formats: '.pdf,.doc,.png',
      size: '1024'
    },
    button: {
      tag: 'span',
      class: 'file-upload__button',
      attributes: 'role="button"',
      text: 'Upload a file'
    }
  }
}
