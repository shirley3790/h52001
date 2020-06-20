//对axios进行二次封装
import axios from 'axios/dist/axios';//引入axios

//创建一个axios对象，配置公共信息
const request = axios.create({ // request==axios
    baseURL: '/',
    timeout: 3000,//3秒：请求超时时间，如果3秒还没有拿到数据就断开
});

// axios.get('/user') // /user  /api/user


//导出axios对象
export default request;