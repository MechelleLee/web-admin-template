<template>
  <section class="container">
    <el-table :data="datasource.data" border style="width: 100%">
      <el-table-column v-if="!_config.index" fixed type="index" :index="handlerSerial" label="ID" align="center">
      </el-table-column>
      <el-table-column v-for="(item,index) in _config.fields" :key="index" :prop="item.prop" :label="item.label"></el-table-column>
      <!-- 数据处理插槽 -->
      <slot name="filter"></slot>
      <!-- 操作栏插槽   -->
      <slot name="action"></slot>
    </el-table>
    <el-pagination v-if="_config.pagination" ref="pagination" :page-size="_config.size" :current-page="page" background layout="prev, pager, next" :total="datasource.total" @current-change="handlerChange">
    </el-pagination>
  </section>
</template>

<script>
import object from '../jslib/object.js';

export default {
  data() {
    return {
      _config: {},
      page: 1,
    };
  },

  props: {
    config: {
      type: Object,
      default: () => {
        return {
          pagination: true,
          size: 10,
          index: true,
          fields: [],
        };
      },
      // 用于校验必传配置
      validator: value => {
        return object.isComplete(value, ['fields']);
      },
    },
    datasource: {
      type: Object,
      default: () => {
        return {
          total: 0,
          data: [],
        };
      },
      required: true,
      // 用于校验必传配置
      validator: value => {
        return object.isComplete(value, ['total', 'data']);
      },
    },
  },

  created() {
    if (object.isComplete(this.config, ['pagination', 'size', 'fields'])) {
      this._config = this.config;
      return;
    }

    this._config = Object.assign(
      {},
      {
        pagination: true,
        size: 10,
        fields: [
          {
            prop: 'name',
            label: '名称',
          },
        ],
      },
      this.config,
    );
  },

  methods: {
    handlerChange(val) {
      this.page = val;
      this.$emit('change-page', {
        element: this.$refs.pagination,
        page: val,
      });
    },
    handlerSerial(index) {
      let size = this.config.size;
      let page = this.page;
      return (page - 1) * size + (index + 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 100%;
  padding-bottom: 60px;

  .el-table {
    // margin-bottom: 60px;
  }

  .el-pagination {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>

