<template>
  <div id="app">
    <top-bar></top-bar>
    <side-bar></side-bar>
  </div>
</template>

<script>
  import SideBar from './components/SideBar.vue'
  import TopBar from './components/TopBar.vue'
  export default {
    name: 'app',
    components: {
      SideBar,
      TopBar
    }
  }
</script>

<style>
  @import "assets/styles/global.scss";

  #app {
    width: 100%;
    height: 100%;
  }

</style>
