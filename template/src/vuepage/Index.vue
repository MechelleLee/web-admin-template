<template>
  <el-container class="full">
    <el-aside width="200px">
      <side-bar>
        <div slot="trademark" class="title-box">
          <img src="../assets/images/ent-logo.png">
          <span>DanKal后台管理</span>
        </div>
        <!-- 仅使用 sessionStorage 版本 -->
        <!-- <div slot="router">
          <component v-for="item in authority" :key="item" :is="item"></component>
        </div> -->
        <!-- 仅使用 vuex 和 sessionStorage 结合的版本 -->
        <div slot="router">
          <component v-for="item in getAuthority" :key="item" :is="item"></component>
        </div>
      </side-bar>
    </el-aside>
    <el-main class="no-padding">
      <router-view/>
    </el-main>
  </el-container>
</template>
<script>
import TopBar from '../components/top-bar';
import SideBar from '../components/side-bar';

//  动态路由组件
import Dynamic from '../components/side-bar/dynamic';
import Example from '../components/side-bar/example';

import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      authority: [],
    };
  },

  components: {
    TopBar,
    SideBar,
    Dynamic,
    Example,
  },

  created() {
    this.recoveryAuthority();

    // sessionStorage 获取权限表
    // const cache = window.sessionStorage.getItem('authority');
    // if (!cache) return;
    // this.authority = cache.split(',');
  },

  mounted() {},

  methods: {
    ...mapActions(['recoveryAuthority']),

    event() {
      let self = this;
      return {
        onClick() {},
      };
    },

    network() {
      let self = this;
      return {
        getListA() {},
      };
    },

    handler() {
      let self = this;
      return {
        handleListA() {},
      };
    },
  },

  watch: {},

  computed: {
    ...mapGetters(['getAuthority']),
  },
};
</script>

<style>
</style>
