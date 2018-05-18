<template>
    <el-container class="full">
        <el-aside width="200px">
          <side-bar></side-bar>
        </el-aside>
        <el-main class="no-padding">
          <router-view/>
        </el-main>
    </el-container>
</template>
<script>
  import TopBar from '../components/top-bar.vue'
  import  SideBar from '../components/side-bar.vue'
  export default{
    data(){
      return {}
    },
    created(){

    },
    mounted(){
    },
    components: {
      TopBar,
      SideBar
    },
    methods: {
      event() {
        let self = this
        return {
          onClick(){

          }
        }
      },
      network(){
        let self = this
        return {
          getListA(){

          }
        }
      },
      handler(){
        let self = this
        return {
          handleListA(){

          }
        }
      }
    },
    watch: {},
    computed: {}
  }
</script>

<style>

</style>
