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
// 路由权限配置模块
import config from './router/config.js';

export default {
  name: 'app',

  created() {
    // 获取配置的权限所对应的路由
    let routers = Object.values(config).map(item => item.router);
    router(this.$router, this.getRouter, routers);
  },

  computed: {
    ...mapGetters(['getRouter', 'getRouters']),
  },
};
</script>

