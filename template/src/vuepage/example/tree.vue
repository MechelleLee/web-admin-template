<template>
  <section class="container">
    <dankal-tree :datasource="datasource">
      <template slot-scope="scope">
        <span>{{ scope.data.text }}</span>
      </template>
    </dankal-tree>
  </section>
</template>

<script>
import DankalTree from '@/components/tree/dankal-tree';
import DankalTreeNode from '@/components/tree/dankal-tree-node';

export default {
  data() {
    return {
      datasource: [{
        text: 'INTEL YES',
        isRoot: true,
        datasource: [{
          text: 'AMD YES',
        }],
      }],
    }
  },

  components: {
    DankalTree,
    DankalTreeNode,
  },
}
</script>

<style lang="scss" scoped>
</style>
