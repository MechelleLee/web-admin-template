<template>
  <section class="container">
    <dankal-table
      :config="config"
      :datasource="datasource"
      @change-page="handlerPageChange"
    >
      <el-table-column
        slot="action"
        fixed="right"
        label="操作"
        width="285"
        align="center"
      >
        <template slot-scope="scope">
          <div>
            <el-button
              type="primary"
              plain
              @click="handlerNavigator(scope)"
            >详情</el-button>
          </div>
        </template>
      </el-table-column>
    </dankal-table>
  </section>
</template>

<script>
import DankalTable from '@/components/table/dankal-table';

export default {
  data() {
    return {
      config: {
        // pagination: true,
        size: 3,
        fields: [
          {
            prop: 'name',
            label: '组件设计',
          },
        ],
      },
      datasource: {
        total: 1,
        data: [
          {
            name: '文本设计',
            alias: 'editor',
          },
          {
            name: '表单设计',
            alias: 'form',
          },
          {
            name: '树形设计',
            alias: 'tree',
          },
          {
            name: '地图选址',
            alias: 'map',
          },
          {
            name: '插件设计',
            alias: 'plugins',
          },
          {
            name: '轴型设计',
            alias: 'time-axis',
          },
          {
            name: '图表设计',
            alias: 'chart',
          },
        ],
      },
    };
  },

  components: {
    DankalTable,
  },

  mounted() {},

  methods: {
    // eslint-disable-next-line no-unused-vars
    handlerPageChange(data) {
      this.datasource = {
        total: 1,
        data: [
          {
            name: '富文本编辑器',
          },
        ],
      };
    },

    handlerNavigator(scope) {
      this.$router.push({
        path: `/example-management/example-${scope.row.alias}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: var(--dankal-body-height);
}
</style>
