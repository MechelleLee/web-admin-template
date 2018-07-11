<template>
  <div class="header-container">
    <div class="router-view">
      <el-breadcrumb separator-class="el-icon-arrow-right" separator=">">
        <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">
          <span @click="changeRouter(item.url)"> {{item.name}}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="filter-view">
      <slot name="filter"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},
  computed: {},
  methods: {
    changeRouter(url) {
      console.log(url);
      this.$router.push({ path: url });
    },
  },
};
</script>

<style lang="scss">
.header-container {
  height: 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  background-color: #fff;
  margin: 0;
  .search-row {
    width: 100%;
  }
  .router-view {
  }
  .filter-view {
    display: flex;
    padding-right: 25px;
    align-items: center;
    .type {
      margin: 0 10px;
      color: #223040;
      background: rgba(0, 0, 0, 0);
      margin: 0 15px;
    }
  }
}

.top-search-input {
  width: 220px;
  margin: 0 10px;
  .search-icon {
    width: 36px !important;
    height: 36px !important;
    padding: 10px 11px !important;
  }
  .search-row {
    margin-bottom: 30px;
  }
}
</style>
