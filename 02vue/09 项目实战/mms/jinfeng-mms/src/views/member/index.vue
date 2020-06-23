<template>
  <div>
    <!-- 表格数据渲染 
      stripe:斑马纹 
    -->
    <el-table :data="tableData" style="width: 100%" height="600" stripe>
      <el-table-column fixed type="index" label="序号"></el-table-column>
      <el-table-column fixed prop="cardNum" label="会员卡号" width="90"></el-table-column>
      <el-table-column prop="name" label="会员姓名"></el-table-column>
      <el-table-column prop="birthday" label="会员生日"></el-table-column>
      <el-table-column prop="phone" label="手机号码" width="110"></el-table-column>
      <el-table-column prop="integral" label="可用积分" width="90"></el-table-column>
      <el-table-column prop="money" label="开卡金额"></el-table-column>
      <el-table-column prop="payType" label="支付类型" width="80"></el-table-column>
      <el-table-column prop="address" label="会员地址" width="180"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页组件 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import memberApi from "@/api/member";

export default {
  data() {
    return {
      tableData: [], //列表数据
      currentPage: 1, //当前第1页
      pageSize: 10, //一页10条数据
      total: 0,
      searchMap: {}
    };
  },

  components: {},

  methods: {
    //功能:发起请求，获取列表数据渲染
    async getdata() {
      try {
        let p = await memberApi.getlist();
        this.tableData = p.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    //功能：编辑功能
    handleEdit(index, row) {
      //index：代表数组的下标，第n+1行
      //row:当前行数据,是一个对象
      console.log(index, row);
    },
    //功能：删除功能
    handleDelete(index, row) {
      //index：代表数组的下标，第n+1行
      //row:当前行数据,是一个对象
      console.log(index, row);
    },
    //功能：翻页的时候触发
    handleSizeChange() {
      this.getSearch();
    },
    //功能：当前页发生改变的时候触发
    handleCurrentChange() {
      this.getSearch();
    },

    //功能：获取分页数据
    async getSearch() {
      try {
        let p = await memberApi.search(
          this.currentPage,
          this.pageSize,
          this.searchMap
        );
        this.tableData = p.data.data.rows;

        //分页组件数据渲染
        this.total = p.data.data.total; //钟
      } catch (err) {
        console.log(err);
      }
    }
  },
  created() {
    //进入页面就马上调取数据渲染
    // this.getdata();
    this.getSearch();
  }
};
</script>

<style scoped>
</style>