const express = require('express');
//引入mysql方法，做数据库的查询
const query = require('../../db/mysql');

const router = express.Router();//router==app


/*
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
*/

//需要：验证用户名是否存在 /user/checkname  一个请求里面只能有一个send否则会报错
router.get('/checkname', async (req, res) => {
    // console.log(6666);
    let { name } = req.query;
    try {
        let sql = `SELECT * FROM userinf WHERE name='${name}'`;
        let p = await query(sql);//[{},{}]
        let inf = {}
        if (p.length) {
            //查到数据：不能注册
            inf = {
                code: 3000,
                flag: false,
                message: '用户名已存在，不能注册'
            }
        } else {
            //查不到数据:允许注册
            inf = {
                code: 2000,
                flag: true,
                message: '可以注册'
            }
        }
        res.send(inf);
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});

//需求：注册  /user/reg
router.post('/reg', async (req, res) => {
    // console.log(6666);
    // console.log(req.body);
    let { name, psw } = req.body;
    // console.log(name, psw);
    try {
        let sql = `INSERT INTO userinf(name, psw) VALUES('${name}','${psw}')`;
        let p = await query(sql);//[{},{}]
        let inf = {}
        if (p.affectedRows) { //受影响多少行 > 0 就是成功
            //查到数据：不能注册
            inf = {
                code: 2000,
                flag: true,
                message: '注册成功'
            }
        } else {
            //查不到数据:允许注册
            inf = {
                code: 3000,
                flag: false,
                message: '注册失败'
            }
        }
        res.send(inf);//响应数据给前端 
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});

//需要：登陆
router.get('/login', async (req, res) => {
    // console.log(6666);
    let { name, psw } = req.query;
    try {
        let sql = `SELECT * FROM userinf WHERE name='${name}' and psw='${psw}'`;
        let p = await query(sql);//[{},{}]
        let inf = {}
        if (p.length) {
            //查到数据：可以登陆
            inf = {
                code: 2000,
                flag: true,
                message: '登录成功',
                data: {
                    token: 'sdasahajzxvhjgvjsd8s7d8s676gds243234'
                }
            }
        } else {
            //查不到数据:不能登录
            inf = {
                code: 3000,
                flag: false,
                message: '登录失败'
            }
        }
        res.send(inf);
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});




module.exports = router;