import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class CloudUpload {
  static get pluginName() {
    return 'CloudUpload';
  }

  constructor(editor) {
    this.editor = editor;

    this.upload = this.upload.bind(this);
  }

  init() {
    // eslint-disable-next-line
    this.adapter = this.editor.config.get('upload');
    const { editor } = this;

    if (!editor) {
      return;
    }

    editor.ui.componentFactory.add('CloudUpload', (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: '图片上传',
        withText: true,
        tooltip: true,
      });

      view.on('execute', () => {
        // eslint-disable-next-line
        const element = document.createElement('input');
        element.type = 'file';

        element.addEventListener(
          'change',
          (event) => {
            this.upload(event.path[0].files[0]);
          },
          false,
        );

        const event = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
        });

        element.dispatchEvent(event);
      });

      return view;
    });
  }

  async upload(file) {
    const { adapter, editor } = this;
    const config = adapter.config();
    // eslint-disable-next-line
    this._initRequest(config);
    // eslint-disable-next-line
    this._initListeners()
      .then((res) => {
        const image = adapter.handle(res);

        editor.model.change((writer) => {
          const imageElement = writer.createElement('image', {
            src: image,
          });

          // Insert the image in the current selection location.
          editor.model.insertContent(imageElement, editor.model.document.selection);
        });
      })
      .catch();
    // eslint-disable-next-line
    this._sendRequest(config, file);
  }

  _initRequest(config) {
    // eslint-disable-next-line
    const xhr = (this.xhr = new XMLHttpRequest());
    xhr.open('POST', config.domain, true);
    Object.entries(config.header || {}).forEach(item => xhr.setRequestHeader(item[0], item[1]));
    xhr.responseType = 'json';
  }

  _initListeners() {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line
      const xhr = this.xhr;

      xhr.addEventListener('error', () => reject());
      xhr.addEventListener('abort', () => reject());
      // eslint-disable-next-line
      xhr.addEventListener('load', () => {
        // eslint-disable-next-line
        const response = xhr.response;

        if (!response) {
          return reject(response);
        }

        resolve(response);
      });
    });
  }

  _sendRequest(config, file) {
    // eslint-disable-next-line
    const { data, filename } = config;
    const form = new FormData();

    Object.entries(data || {}).forEach(item => form.append(item[0], item[1]));

    form.append(filename || 'file', file);

    this.xhr.send(form);
  }
}
