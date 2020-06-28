import request from '@/utils/request';//引入axios对象

const BAST_API = process.env.VUE_APP_BASE_API;

export default {
    // 分页获取列表
    search(page, size, searchMap) {
        return request({
            url: BAST_API + `/goods/list/search/${page}/${size}`,
            method: 'get',
            data: searchMap
        })
    },
}
