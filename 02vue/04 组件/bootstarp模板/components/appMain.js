let appMain = {
    template: `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <!--右边上半区域-->
    <!--第二步：找到子组件的标签，给他绑定自定义属性-->
    <!--传递方法2：把这个方法绑定在节点上，作为自定义属性-->
    <!--<app-top :likes="likes" :deleLike="deleLike">
        兴趣爱好
    </app-top>-->
    <app-top :likes="likes" :deleLike="deleLike">
        <h2 slot="aa">编程趣闻</h2>
        <h2 slot="default">黄花树下</h2>
    </app-top>
    <!--右边下半区域-->
    <!--自定义事件用法2:找到你的子组件绑定自定义事件(remove)，并调用刚才的方法(deleEmp) -->
    <app-bottom :empList="empList" @remove="deleEmp"></app-bottom>
  </div>`,
    components: {
        appTop,
        appBottom
    },
    data() {
        return {
            //第一步：在父组件准备数据
            likes: ['篮球', '游戏', '爬山', '编程'],
            empList: [{
                id: 1,
                name: '马云',
                salary: 80001
            },
            {
                id: 2,
                name: '马化腾',
                salary: 80002
            },
            {
                id: 3,
                name: '罗永浩',
                salary: 80003
            },
            {
                id: 4,
                name: '李彦宏',
                salary: 80004
            }
            ]
        }
    },
    methods: {
        //传递方法1：先在父组件声明一个方法
        //删除爱好
        deleLike(index) {//通信规则：谁的数据谁管理
            this.likes.splice(index, 1);//删除likes里面的下标为index的那条数据
        },
        //删除员工
        //自定义事件用法1:先在父组件声明一个方法
        deleEmp(index) {//通信规则：谁的数据谁管理
            // console.log(index + '调用啦');
            this.empList.splice(index, 1);//删除likes里面的下标为index的那条数据
        }
    }
}
