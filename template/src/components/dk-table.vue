<template>
    <el-table
      :data="data"
      border style="width: 100%"
    >
      <el-table-column v-for="(item,index) in fields"
        :key="index"
        :prop="item.prop"
        :label="item.label"
      ></el-table-column>
        <!--操作栏插槽-->
         <slot ></slot>
    </el-table>
</template>

<script>
    export default {
        name: "dk-table",
        props:{
          data:{
            type:Array,
            required:true
          },
          fields:{
            type:Array,
            required:true
          }
        }
    }
</script>

<style scoped>

</style>
