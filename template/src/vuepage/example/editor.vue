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

import editor from '../../configs/editor';

export default {
  data() {
    return {
      html: '<p>测试</p>',
      config: {},
    };
  },

  mixins: [Mixins],

  components: {
    DankalEditor,
  },

  created() {
    // 自定义配置
    this.config = Object.assign({}, editor, {
      height: 750,
    });
  },

  methods: {
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
