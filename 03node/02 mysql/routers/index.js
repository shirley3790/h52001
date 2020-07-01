//引入express开启静态资源服务器
const express = require('express');
const router = express.Router();//router==app
// 引入json解析中间件
var bodyParser = require('body-parser');

// 添加json解析
router.use(bodyParser.json());//转json数据的 {"key":"value","key":"value"}
router.use(bodyParser.urlencoded({ extended: false }));//转键值对数据 key=value&key=value

//导入子路由
const usersRouter = require('./modules/usersRouter');
const goodsRouter = require('./modules/goodsRouter');


router.use('/user', usersRouter);//启用子路由:use里面的函数是中间件
//中间件本质上是函数，但是函数不一定是中间件 (req, res, next)
router.use('/good', goodsRouter);//启用子路由


//划分子路由

/*
    电商网：
        * 用户管理 usersRouter.js
            * 验证用户名是否存在
            * 注册
            * 登陆
            * 验证token
            * 修改信息
            * 删除用户
            * 删除多个用户
            * 查询用户列表(分页)
            * 查询uid为xx的用户信息
        * 商品管理 goodsRouter.js
            * 商品信息列表
            * 查询gid为xx的商品
            * 修改gid为xx的商品信息
            * 删除gid的商品
            * 删除多个商品
            * 新增商品
        * 订单管理 ordersRouter.js
            * 新增订单
            * 删除订单
            * 修改订单
            * 查询订单列表
            * 查询某个订单
*/

//导出路由
module.exports = router;

