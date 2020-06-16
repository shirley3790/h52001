//创建vue-router实例，并配置路由表
let router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/', //设置的路径，哈希
            component: appMain //子路由
        },
        {
            path: '/news',
            component: appNews,
            children: [//嵌套路由：在里面又设置一个子路由表
                {
                    path: '/news/sport',//写成完成的路径
                    component: Sport
                },
                {
                    path: 'tech',// 路由自动帮你补全 /new/tech;不能在子路由前加/
                    component: Tech
                },
                {
                    path: '',
                    redirect: '/news/sport' //重定向
                }
            ]
        },
        {
            path: '/mine',
            component: appMine
        }
    ]
});