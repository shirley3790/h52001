//对axios进行二次封装
import axios from 'axios/dist/axios';//引入axios

// 按需导入 ElementUI 组件
import { Loading, Message } from 'element-ui'
// 加载数据时打开和关闭动效对象
const loading = {
    loadingInstance: null,  // Loading实例
    open: function () { // 打开加载
        // console.log('加载中', this.loadingInstance)
        if (this.loadingInstance === null) { // 创建单例, 防止切换路由重复加载
            // console.log('创建加载实例..')
            this.loadingInstance = Loading.service({
                text: '拼命加载中',
                target: '.main', // 效果显示区域
                background: 'rgba(0, 0, 0, 0.5)' // 加载效果
            })
        }
    },
    close: function () { // 关闭加载
        if (this.loadingInstance !== null) {
            this.loadingInstance.close()
            // console.log('结束加载')
        }
        this.loadingInstance = null // 关闭后实例重新赋值null, 下次让它重新创建
    }
}

//创建一个axios对象，配置公共信息
const request = axios.create({ // request==axios
    baseURL: '/',
    timeout: 5000//3秒：请求超时时间，如果3秒还没有拿到数据就断开

});

// axios.get('/user') // /user  /api/user
// 请求拦截器:只要发送请求，就会触发这个拦截器
request.interceptors.request.use(config => {
    loading.open() // 打开加载效果
    return config
}, error => {
    // 出现异常
    loading.close() // 关闭加载效果
    return Promise.reject(error);
})


// 响应拦截器:如果服务器有响应，就会触发这个拦截器
request.interceptors.response.use(response => {
    loading.close() // 关闭加载效果
    return response
}, error => {
    loading.close() // 关闭加载效果
    return Promise.reject(error);
})

//导出axios对象
export default request;