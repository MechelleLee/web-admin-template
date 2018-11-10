<template>
  <section class="container">
    <dankal-tree
      :datasource="datasource"
      :template="template"
    />
  </section>
</template>

<script>
import DankalTree from '@/components/tree/dankal-tree';
import DankalTreeNode from '@/components/tree/dankal-tree-node';
import DankalCard from '@/components/card/dankal-card';

export default {
  data() {
    return {
      datasource: [{
        text: 'INTEL YES',
        root: true,
        child: [{
          text: 'AMD YES',
          root: true,
          child: [{
            text: 'SYSTEM YES',
          }],
        }, {
          text: 'AMD YES',
        }, {
          text: 'AMD YES',
        }],
      }, {
        text: 'INTEL YES',
        root: true,
        child: [{
          text: 'AMD YES1',
        }, {
          text: 'AMD YES1',
        }, {
          text: 'AMD YES1',
        }],
      }],
    }
  },

  components: {
    DankalTree,
    DankalTreeNode,
    DankalCard,
  },

  methods: {
    template(h, { data, root, parent }) {
      /* eslint-disable */
      const up = require('@/assets/images/menu-icon/up.png');
      const down = require('@/assets/images/menu-icon/down.png');
      /* eslint-disable */
      const { launch } = parent;

      return (
        <dankal-card style="margin-bottom: 10px;">
          <div style="display:flex; align-items: center; justify-content: space-between;">
            <span>{data.text}</span>
            {root ? <img src={launch ? up : down} on-click={() => parent.handlerLaunch()} style="width: 16px; height: 16px;" /> : <i/>}
          </div>
        </dankal-card>
      );
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
