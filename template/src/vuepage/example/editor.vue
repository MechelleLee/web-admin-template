<template>
  <section class="container">
    <dankal-editor
      v-model="html"
      :config="config"
      @error="handlerEditorError"
    />
    <div class="article-block">
      <dankal-html :html="html" />
    </div>
  </section>
</template>

<script>
import DankalEditor from '@/components/editor/dankal-editor';
import DankalHtml from '@/components/html/dankal-html';
import Mixins from '@/mixins/operations';

import property from '@/configs/editor';

import { getCloudsToken } from '../../api/example';
import CloudUpload from '../../components/editor/plugins/cloud-upload';
import LineHeight from '../../components/editor/plugins/line-height';

export default {
  data() {
    return {
      html:
        '<h1 style="text-align:center;">星空</h1><figure class="image"><img src="https://cdn.dankal.cn/FvERhE7quRwTKawjGHWUB4Vj0ZpZ"></figure><p style="text-align:center;">&nbsp;</p>',
      config: {},
      upload: {
        domain: 'https://upload-z2.qiniup.com',
        url: '',
        filename: 'file',
      },
    };
  },

  mixins: [Mixins],

  components: {
    DankalEditor,
    DankalHtml,
  },

  async created() {
    this.network().getCloudsToken();
    // 自定义配置
    this.config = Object.assign({}, property, {
      plugins: [CloudUpload, LineHeight],
      toolbar: property.toolbar.concat(['CloudUpload'], ['|', 'undo', 'redo']),
      upload: {
        config: this.handleUploadConfig,
        handle: this.handlerImageUpload,
      },
    });
  },

  mounted() {},

  methods: {
    handleUploadConfig() {
      return this.upload;
    },

    handlerImageUpload(data) {
      return `${this.upload.url}${data.hash}`;
    },

    handlerEditorError(error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    },

    network() {
      const self = this;

      return {
        async getCloudsToken() {
          const { data } = await getCloudsToken();

          self.upload = Object.assign(self.upload, {
            url: data.url,
            data: {
              token: data.token,
            },
          });
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.article-block {
  padding: 10px 0px;
  margin-top: 10px;
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
}
</style>
