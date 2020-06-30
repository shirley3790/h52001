//引入express(第三方，用之前要安装)

let express = require('express');

let app = express();//创建实例

//开启静态资源服务器：静态资源：html、css、js、图片、视频音频
app.use(express.static('./'));

/*
    中间件：
    app.use([path],中间件……)
        * 中间件就是函数，帮我们做一些数据处理
        * 三个参数
            * request 请求对象：前端发送ajax的时候，发送的相关数据
            * response 响应前端，把数据准备好，发回去给前端
            * next 下一步，不写，默认就是允许进入下一个路由
*/

//use方法意味着，前端无论什么请求方式都能进入到这个路由
// app.use('/home', (request, response, next) => {
//     response.send('响应数据home');//一个use方法里面，只能有一个send()
//     // console.log('第一个中间件');
//     next();
// });

//restful接口规范：get post put delete

//get请求：获取购物车数据列表
app.get('/cartList', (req, res) => {
    let list = [
        {
            gid: '001',
            gname: '华为',
            gprice: '7899'
        },
        {
            gid: '002',
            gname: '苹果',
            gprice: '8999'
        }
    ]

    //响应数据
    res.send(list);
});

//查询gid为2的那条商品数据:动态路由
let goods = [
    {
        gid: 1,
        gname: '华为',
        gprice: '7899'
    },
    {
        gid: 2,
        gname: '苹果',
        gprice: '8999'
    }
]
//get请求：http://localhost:2011/good/3
app.get('/good/:id', (req, res) => {
    console.log(req.params);//{id:3}
    let gid = req.params.id;
    let goodinf = goods.filter(item => item.gid == gid);
    res.send(goodinf);
});

//get请求：查询gname叫苹果的商品:http://localhost:2011/good?gname=苹果
app.get('/good', (req, res) => {
    console.log(req.query);//{gname:'苹果'}
    let name = req.query.gname;
    let goodinf = goods.filter(item => item.gname == name);
    res.send(goodinf);
});

//post请求：注册账号
//express.urlencoded() 用于接收 application/x-www-form-urlencoded : key1=val1&key2=val2
app.post('/reg', express.urlencoded(), (req, res) => {
    //前端把账号和密码发过来，后端拿到，存到数据库里面
    console.log(req.body);//{name:'laoxie',psw:123456}
    //发送ajax，把数据插入到数据库里面
    let inf = {
        code: 2000,
        flag: true,
        message: '注册成功'
    }
    res.send(inf)
});

//put请求:把id为2的商品名称换成 小米
app.put('/good', express.urlencoded(), (req, res) => {
    let obj = req.body;//{name:'小米',id:2}
    // let test = req.query;
    // console.log(test);
    let goodinf = goods.filter(item => item.gid == obj.id);
    goodinf[0].gname = obj.name;
    // console.log(goodinf);
    let inf = {
        code: 2000,
        flag: true,
        message: '修改成功',
        data: goodinf
    }
    res.send(inf);
});

//delete请求:删除id为1的数据
app.delete('/good/:id', (req, res) => {
    let id = req.params.id;
    let good = goods.filter(item => item.gid != id);
    let inf = {
        code: 2000,
        flag: true,
        message: '删除成功',
        data: good
    }
    res.send(inf);
})

//前端：什么都不做，但是如果你看到后端要求是这个格式的数据：application/x-www-form-urlencoded，让后端转 https://blog.csdn.net/u014672511/article/details/80425808

// axios.post('xxx', {
//     name: 'laoxie',
//     psw: 123456
// })

app.listen(2011, () => {
    console.log('服务器开启成功:请访问http://localhost:2011');
});