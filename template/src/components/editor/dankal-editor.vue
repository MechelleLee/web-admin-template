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
import '@ckeditor/ckeditor5-ui/theme/globals/_reset.css';
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

    const plugins = this.config.plugins || [];
    const config = Object.assign({}, this.config, {
      plugins: DecoupledEditor.builtinPlugins.concat(plugins),
    });

    console.log('====================================');
    console.log(config);
    console.log('====================================');

    DecoupledEditor
      .create(this.$refs.container, config)
      .then((editor) => {
        const toolbarContainer = self.$refs.toolbar;
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);

        self.editor = editor;

        editor.model.document.on('change:data', () => {
          self.handlerEditorValue();
        });
      })
      .catch((error) => {
        self.$emit('error', error);
        console.log('====================================');
        console.log(error);
        console.log('====================================');
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
