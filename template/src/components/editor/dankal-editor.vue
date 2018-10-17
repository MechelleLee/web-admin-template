<template>
  <section class="dankal-edtior">
    <div ref="toolbar" />
    <div
      class="dankal-editor-content"
      ref="container"
      :style="{height: height}"
    />
  </section>
</template>

<script>
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

export default {
  data() {
    return {
      editor: null,
    }
  },

  props: {
    value: {
      type: String,
      default: '',
      require: true,
    },
    height: {
      type: String,
      default: '750px',
    },
    config: {
      type: Object,
      default: () => {},
    },
  },

  mounted() {
    const self = this;

    DecoupledEditor
      .create(this.$refs.container, this.config)
      .then((editor) => {
        const toolbarContainer = self.$refs.toolbar;
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);

        window.editor = editor;
        self.editor = editor;

        editor.model.document.on('change:data', () => {
          self.handlerEditorValue();
        });
      })
      .catch((error) => {
        self.$emit('error', error);
      });
  },

  methods: {
    handlerEditorValue() {
      const value = this.editor.getData();
      this.$emit('input', value);
    },
  },
}
</script>

<style lang="scss" scope>
.dankal-editor-content {
  border: 1px solid #c4c4c4 !important;
}
</style>
