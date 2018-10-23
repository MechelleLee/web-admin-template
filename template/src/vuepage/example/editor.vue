<template>
  <section class="container">
    <dankal-editor
      v-model="html"
      :config="config"
    />
  </section>
</template>

<script>
import DankalEditor from '@/components/editor/dankal-editor';
import Mixins from '@/mixins/operations';

import property from '@/configs/editor';

import { getCloudsToken } from '../../api/example';
import CloudUpload from '../../components/editor/plugins/cloud-upload';

export default {
  data() {
    return {
      html: '<p>测试</p>',
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
  },

  async created() {
    this.network().getCloudsToken();
    // 自定义配置
    this.config = Object.assign({}, property, {
      plugins: [CloudUpload],
      toolbar: property.toolbar.concat(['CloudUpload'], ['|', 'undo', 'redo']),
      upload: {
        config: this.handleUploadConfig,
        handle: this.handlerImageUpload,
      },
    });
  },

  mounted() {
    console.log('====================================');
    console.log('dala');
    console.log('====================================');
  },

  methods: {
    handleUploadConfig() {
      return this.upload;
    },

    handlerImageUpload(data) {
      return `${this.upload.url}${data.hash}`;
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

  watch: {
    // eslint-disable-next-line no-unused-vars
    html(nv, ov) {
      console.log('====================================');
      console.log(nv);
      console.log('====================================');
    },
  },
};
</script>

<style scoped>
</style>
