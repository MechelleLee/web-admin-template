<style lang="scss">
@import 'assets/styles/reset.scss';
@import 'assets/styles/app.scss';

html,
body {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <router-view/>
</template>

<script>
import router from '@/router/build.js';

import { mapGetters } from 'vuex';

export default {
  name: 'app',

  created() {
    router(this.$router, this.getRouter);
  },

  computed: {
    ...mapGetters(['getRouter']),
  },
};
</script>

