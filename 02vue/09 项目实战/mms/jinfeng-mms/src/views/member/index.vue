<template>
  <div>
    <!-- 表单组件 -->
    <el-form
      ref="ruleForm"
      :inline="true"
      :model="searchMap"
      class="demo-form-inline"
      style="margin-top: 20px;"
    >
      <el-form-item prop="cardNum">
        <el-input v-model="searchMap.cardNum" placeholder="会员卡号" style="width: 200px;"></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input v-model="searchMap.name" placeholder="会员名称" style="width: 200px;"></el-input>
      </el-form-item>
      <el-form-item prop="payType">
        <el-select v-model="searchMap.payType" placeholder="支付类型" style="width: 110px;">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" prop="birthday">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="出生日期"
            v-model="searchMap.birthday"
            style="width: 150px"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="success" @click="dialogFormVisible = true">新增</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格数据渲染 
      stripe:斑马纹
      border：边框
    -->
    <el-table :data="tableData" style="width: 100%" height="600" stripe border>
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

    <!-- 对话框 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="500px">
      <el-form
        status-icon
        ref="pojoForm"
        :model="pojo"
        label-width="100px"
        label-position="right"
        style="width: 400px;"
      >
        <el-form-item label="会员卡号" prop="cardNum">
          <el-input v-model="pojo.cardNum" />
        </el-form-item>
        <el-form-item label="会员姓名" prop="name">
          <el-input v-model="pojo.name" />
        </el-form-item>
        <el-form-item label="会员生日" prop="birthday">
          <el-date-picker v-model="pojo.birthday" type="date" placeholder="请点击选择" />
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="pojo.phone" />
        </el-form-item>
        <el-form-item label="开卡金额" prop="money">
          <el-input v-model="pojo.money" />
        </el-form-item>
        <el-form-item label="可用积分">
          <el-input v-model="pojo.integral"></el-input>
        </el-form-item>
        <el-form-item prop="payType" label="支付类型">
          <el-select v-model="pojo.payType" placeholder="支付类型" style="width: 110px;">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
      searchMap: {
        cardNum: "",
        name: "",
        payType: "",
        birthday: ""
      },
      dialogFormVisible: false, //对话框的显示和隐藏,false默认弹窗是隐藏的
      pojo: {
        cardNum: "",
        name: "",
        birthday: "",
        phone: "",
        money: "",
        integral: "",
        payType: ""
      }
    };
  },

  components: {},

  methods: {
    //功能：点击查询的时候触发这里
    onSubmit() {
      console.log("点击查询按钮了");
    },

    //功能：新增会员
    addMember() {
      console.log("新增会员了");
    },

    //功能：重置按钮
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

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
    handleSizeChange(val) {
      this.pageSize = val; //假设：每页10条；如果在页面切换成20条，下次发生ajax，应该要20条数据
      this.getSearch();
    },
    //功能：当前页发生改变的时候触发
    handleCurrentChange(val) {
      this.currentPage = val;
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