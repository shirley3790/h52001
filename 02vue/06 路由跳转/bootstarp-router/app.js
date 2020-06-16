let app = {
  template: `<div id="app"><!--头部导航区域-->
    <!-- 调用组件 -->
    <app-head></app-head>

    <!--核心区域:分左右两边-->
    <div class="container-fluid">
      <div class="row">

        <!--左边菜单栏区域-->
        <!-- 3、调用组件 -->
        <app-menu></app-menu>

        <!--右边主页面区域: 分上下两个区域-->
        <!--设置路由出口:下面的组件会被缓存，里面的组件不被销毁-->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        
      </div>
    </div></div>`,
  components: {//2、注册组件，才能在body里面引用
    // 'app-head': appHead
    // 'appHead': appHead
    appHead,
    appMenu,
    appMain
  }
}