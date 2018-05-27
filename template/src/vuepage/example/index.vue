<template>
  <el-container class="full-height bg-gray">
    <el-header class="no-padding">
      <top-bar>
        <!--通过slot拓展的筛选项-->
        <div slot="filter">
          <el-button>1</el-button>
          <el-button>2</el-button>
          <el-button>3</el-button>
        </div>
      </top-bar>
    </el-header>
    <el-main class="page-content">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import TablePagination from '@/components/table-pagination';
import QuillEditor from '../../components/quill-editor';

export default {
  data() {
    return {
      config: {
        // pagination: true,
        size: 3,
        fields: [
          {
            prop: 'name',
            label: '名称',
          },
        ],
      },
      datasource: {
        total: 6,
        data: [
          {
            name: 'core',
          },
          {
            name: 'core',
          },
          {
            name: 'core',
          },
        ],
      },

      html: '<p>测试</p>',
    };
  },

  components: {
    TablePagination,
    QuillEditor,
  },

  mounted() {},

  methods: {
    handlerPageChange(data) {
      this.datasource = {
        total: 6,
        data: [
          {
            name: 'dankal',
          },
          {
            name: 'dankal',
          },
          {
            name: 'dankal',
          },
        ],
      };
    },

    handlerTextPage(data) {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    },

    event() {
      const self = this;
      return {
        detail(scope) {
          console.log('====================================');
          console.log(scope);
          console.log('====================================');
        },
      };
    },

    handleClick(row) {
      console.log(row);
    },
  },

  watch: {
    html(nv, ov) {
      console.log('====================================');
      console.log(nv);
      console.log('====================================');
    },
  },
};
</script>

<style scoped>
</style>
