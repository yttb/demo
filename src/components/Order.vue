<template>
  <div class="s">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="日期">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="address" placeholder="请输入地址"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%">
      <el-table-column prop="date" label="日期" sortable width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template v-slot="scope">
          <!-- scope捕捉每行数据 -->
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button @click="Delete(scope.$index)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>


</template>
<script>
import dayjs from 'dayjs';
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      value1: '',
      name: '',
      address: ''
    }
  },
  methods: {
    mounted() {

    },
    handleClick(row) {
      alert(row.date + ' ' + row.name + ' ' + row.address)
    },
    Delete(index) {
      this.tableData.splice(index, 1);
    }
    ,
    onSubmit() {
      this.tableData.push({
        date: dayjs(this.value1).format('YYYY-MM-DD'),
        name: this.name,
        address: this.address
      })
    }
  },
}
</script>
<style scoped>
.s {
  margin: 20px 0 0 20px;
}
</style>