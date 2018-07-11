<template>
  <section class="container">
    <div id='editor' ref="editor">
    </div>
  </section>
</template>

<script>
import _Quill from 'quill';

const Quill = window.Quill || _Quill;

export default {
  data() {
    return {
      _value: '',
    };
  },

  props: {
    option: {
      type: Object,
      default: () => {
        // Quill 编辑器的配置： https://quilljs.com/docs/modules/toolbar/
        // [
        //   ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        //   ['blockquote', 'code-block'],

        //   [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        //   [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        //   [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        //   [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        //   [{ 'direction': 'rtl' }],                         // text direction

        //   [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        //   [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        //   [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        //   [{ 'font': [] }],
        //   [{ 'align': [] }],

        //   ['clean']                                         // remove formatting button
        // ];
        return {
          theme: 'snow',
        };
      },
    },
    value: String,
  },

  mounted() {
    // 初始富文本编辑器
    this.initialize();
  },

  destroyed() {
    // 销毁富文本编辑器
    this.quill = null;
    delete this.quill;
  },

  methods: {
    initialize() {
      // 注意不要使用ID选择来初始化编辑器，否则无法在同一个页面初始两个组件
      this.quill = new Quill(this.$refs.editor, this.option);

      //解析传入的值
      if (this.value) {
        this.quill.pasteHTML(this.value);
      }

      //API事件：https://quilljs.com/docs/api/#events
      //监听文本的变化
      this.quill.on('text-change', (delta, olddelta, source) => {
        let html = this.$refs.editor.children[0].innerHTML;

        const quill = this.quill;
        const text = this.quill.getText();

        if (html === '<p><br></p>') html = '';

        this._value = html;

        this.$emit('input', html);

        this.$emit('change', {
          html,
          text,
          quill,
        });
      });
    },
  },

  watch: {
    value(nv, ov) {
      if (!this.quill) return;

      if (nv && nv !== this._value) {
        this._value = nv;
        this.quill.pasteHTML(nv);
        return;
      }

      if (!nv) {
        this.quill.setText('');
      }
    },
  },
};
</script>

<style lang="scss">
</style>
