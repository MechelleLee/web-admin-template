<template>
  <section class="container">
    <quill-editor v-model="html" @change="handlerTextPage"></quill-editor>
  </section>
</template>

<script>
import QuillEditor from '@/components/quill-editor';

export default {
  data() {
    return {
      html: '<p>测试</p>',
    };
  },

  components: {
    QuillEditor,
  },

  mounted() {},

  methods: {
    handlerTextPage(data) {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    },
  },

  watch: {
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
