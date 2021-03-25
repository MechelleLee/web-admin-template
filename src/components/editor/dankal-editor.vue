<template>
  <section class="dankal-edtior">
    <div ref="toolbar" />
    <div
      class="dankal-editor-container"
      :style="{'min-height': height}"
    >
      <div
        class="dankal-edtior-content"
        ref="container"
        :style="{width: width}"
      />
    </div>
  </section>
</template>

<script>
import '@ckeditor/ckeditor5-ui/theme/globals/_reset.css';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

export default {
  data() {
    return {
      editor: null,
    };
  },

  props: {
    value: {
      type: String,
      default: '',
      require: true,
    },
    width: {
      type: String,
      default: '1024px',
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

  watch: {
    value(n, v) {
      if (this.editor && !v) this.editor.setData(n);
    },
  },

  mounted() {
    const self = this;

    const plugins = this.config.plugins || [];
    const config = Object.assign({}, this.config, {
      plugins: DecoupledEditor.builtinPlugins.concat(plugins),
    });

    DecoupledEditor.create(this.$refs.container, config)
      // eslint-disable-next-line
      .then(editor => {
        const toolbarContainer = self.$refs.toolbar;
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);

        self.editor = editor;

        if (self.value) {
          self.editor.setData(self.value);
        }

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
};
</script>

<style lang="scss" scope>
.dankal-editor-container {
  background-color: #fafafa;
  border: 1px solid #c4c4c4;
}

.dankal-edtior-content {
  border: 0px !important;
  outline: 0px;

  background-color: #ffffff;
  margin: 20px auto;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.08),
    2px -2px 4px 0 rgba(0, 0, 0, 0.08), -2px -2px 4px 0 rgba(0, 0, 0, 0.08),
    -2px 2px 4px 0 rgba(0, 0, 0, 0.08) !important;
}
</style>
