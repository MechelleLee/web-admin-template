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

export default {
  name: 'app',

  created() {
    if (window.sessionStorage.getItem('login'))
      router(this.$router, '/authority-management');
  },
};
</script>

