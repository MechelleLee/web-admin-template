<template>
  <section class="dankal-tree-node">
    <div
      class="dankal-tree-node-item"
      v-for="(item, index) in datasource"
      :key="index"
    >
      <slot :data="item" />
      <dankal-tree-node
        v-if="item.isRoot"
        :datasource="item.datasource"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'DankalTreeNode',

  componentName: 'DankalTreeNode',

  data() {
    return {}
  },

  props: {
    datasource: {
      type: [Array, Object],
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.dankal-tree-node-item::before {
  content: '';

  display: inline-block;

  width: 16px;
  height: 16px;

  background-color: red;
}
</style>
