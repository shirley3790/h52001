<template>
  <div>
    <div class="header">
      <!-- 头部左侧Logo和标题 -->
      <a href="#/">
        <img class="logo" src="@/assets/img/logo.jpg" width="25px" />
        <span class="company">金丰会员管理系统</span>
      </a>
      <!-- 下拉菜单 -->
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          个人中心
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-edit" command="a">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-s-fold" command="b">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {
    handleCommand(command) {
      this.$message("你点击了：" + command);
    }
  }
};
</script>

<style scoped>
.logo {
  vertical-align: middle;
  /* 上 右 下 左 */
  padding: 0 10px 0 40px;
}
.company {
  position: absolute;
  color: white;
}
/* 下拉菜单 */
.el-dropdown {
  float: right;
  margin-right: 40px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
</style>