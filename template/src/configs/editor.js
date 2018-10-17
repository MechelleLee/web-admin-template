module.exports = {
  toolbar: [
    'heading',
    '|',
    'fontFamily',
    'fontSize',
    '|',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'blockQuote',
    'highlight',
    '|',
    'alignment',
    '|',
    'bulletedList',
    'numberedList',
    '|',
    'link',
    '|',
    'undo',
    'redo',
  ],
  // 标题的配置
  heading: {
    options: [
      { model: 'paragraph', title: '段落', class: 'ck-heading_paragraph' },
      {
        model: 'heading1',
        view: 'h1',
        title: '标题 <h1>',
        class: 'ck-heading_heading1',
      },
      {
        model: 'heading2',
        title: '标题 <h2>',
        view: 'h2',
        class: 'ck-heading_heading2',
      },
    ],
  },

  // 位置的配置
  alignment: {
    options: ['left', 'center', 'right', 'justify'],
  },

  // 字体的配置
  fontFamily: {
    options: [
      'default',
      'Ubuntu, Arial, sans-serif',
      'Ubuntu Mono, Courier New, Courier, monospace',
    ],
  },

  // 字体大小的配置
  fontSize: {
    options: [9, 11, 13, 'default', 17, 19, 21],
  },

  // 高亮的配置
  highlight: {
    options: [
      {
        model: 'greenMarker',
        class: 'marker-green',
        title: 'Green marker',
        color: 'rgb(25, 156, 25)',
        type: 'marker',
      },
      {
        model: 'yellowMarker',
        class: 'marker-yellow',
        title: 'Yellow marker',
        color: '#cac407',
        type: 'marker',
      },
      {
        model: 'redPen',
        class: 'pen-red',
        title: 'Red pen',
        color: 'hsl(343, 82%, 58%)',
        type: 'pen',
      },
    ],
  },

  // 图片位置的配置
  image: {
    // You need to configure the image toolbar, too, so it uses the new style buttons.
    toolbar: [
      'imageTextAlternative',
      '|',
      'imageStyle:alignLeft',
      'imageStyle:full',
      'imageStyle:alignRight',
    ],

    styles: [
      // This option is equal to a situation where no style is applied.
      'full',

      // This represents an image aligned to the left.
      'alignLeft',

      // This represents an image aligned to the right.
      'alignRight',
    ],
  },
};
