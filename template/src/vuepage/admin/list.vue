<template>
  <el-container class="full-height bg-gray" >
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
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="date"
          label="ID"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="管理员名称"
        >
        </el-table-column>
        <el-table-column
          prop="province"
          label="账号"
        >
        </el-table-column>
        <el-table-column
          prop="city"
          label="密码"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="拥有权限"
        >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="250"
        >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" size="mini">编辑</el-button>
            <el-button size="mini" @click="isShowAuthDialog=true">查看权限</el-button>
            <el-button size="mini">删除</el-button>
          </template>

        </el-table-column>
      </el-table>
    </el-main>

    <!--dialog-->
    <el-dialog title="新增管理员" :visible.sync="isShowDialog" width="30%">
      <el-form>
        <el-form-item label="管理员名称" label-width="120px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="账号" label-width="120px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="120px">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="权限管理" :visible.sync="isShowAuthDialog" width="30%">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="管理员管理" name="type"></el-checkbox>
        <el-checkbox label="用户管理" name="type"></el-checkbox>
        <el-checkbox label="抽纸盒管理" name="type"></el-checkbox>
        <el-checkbox label="充值管理" name="type"></el-checkbox>
        <el-checkbox label="礼卡管理" name="type"></el-checkbox>
        <el-checkbox label="故障反馈" name="type"></el-checkbox>
        <el-checkbox label="消息通知" name="type"></el-checkbox>
      </el-checkbox-group>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        isShowDialog: false,
        isShowAuthDialog: false,
        form: {
          type: []
        },
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>

<style scoped>

</style>
