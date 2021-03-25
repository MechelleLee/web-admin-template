<template>
  <section class="dankal-tree">
    <dankal-tree-node
      v-for="(item, index) in datasource"
      :key="index"
      :data="item"
      :template="template"
    />
  </section>
</template>

<script>
import DankalTreeNode from './dankal-tree-node';

export default {
  props: {
    datasource: {
      type: Array,
      default: () => [],
    },
    template: {
      type: Function,
      default: () => () => (<span>This is default template of tree's node</span>),
    },
  },

  components: {
    DankalTreeNode,
  },
}
</script>

<style lang="scss" scoped>
.dankal-tree {
  overflow: hidden;
}
</style>
