(function () {

    let vm = new Vue({
        el: '#app',
        data: {
            goodlists: [{
                shop_isok: false,//店铺复选框
                shop_id: 10001,//店铺id
                shop_name: '5香麻辣店',//店铺名称
                shop_comm: [{ //店铺的商品
                    comm_isok: false,//商品复选框
                    comm_id: 1008,//商品id
                    comm_img: './images/1.png',//商品img路径
                    comm_int: '这是一家很不错的店里面的货物',//标题
                    comm_big: '259g', //规格
                    comm_price: '8998', //单价
                    num: 1, //数量
                    total: 8998,//总价
                    stock: 6
                }, {
                    comm_isok: false,
                    comm_img: './images/4.png',
                    comm_id: 1008,
                    comm_int: '这是一家很不错的店里面的货物',
                    comm_big: '259g',
                    comm_price: '1998',
                    num: 1,
                    total: 1998,
                    stock: 10
                }]
            },
            {
                shop_isok: false,
                shop_id: 10002,
                shop_name: '7香麻辣店',
                shop_comm: [{
                    comm_isok: false,
                    comm_id: 1008,
                    comm_img: './images/2.png',
                    comm_int: '这是一家很不错的店里面的货物',
                    comm_big: '259g',
                    comm_price: '4998',
                    num: 1,
                    total: 4998,
                    stock: 10
                }, {
                    comm_isok: false,
                    comm_id: 1008,
                    comm_img: './images/1.png',
                    comm_int: '这是一家很不错的店里面的货物',
                    comm_big: '259g',
                    comm_price: '8998',
                    num: 1,
                    total: 8998,
                    stock: 20
                }, {
                    comm_isok: false,
                    comm_img: './images/4.png',
                    comm_id: 1008,
                    comm_int: '这是一家很不错的店里面的货物',
                    comm_big: '259g',
                    comm_price: '1998',
                    num: 1,
                    total: 1998,
                    stock: 6
                }]
            }, {
                shop_isok: false,
                shop_id: 10003,
                shop_name: '1香麻辣店',
                shop_comm: [{
                    comm_isok: false,
                    comm_id: 1008,
                    comm_img: './images/3.png',
                    comm_int: '这是一家很不错的店里面的货物',
                    comm_big: '259g',
                    comm_price: '5998',
                    num: 1,
                    total: 5998,
                    stock: 6
                }, {
                    comm_isok: false,
                    comm_id: 1008,
                    comm_img: './images/1.png',
                    comm_int: '这是一家很不错的店里面的货物',
                    comm_big: '259g',
                    comm_price: '8998',
                    num: 1,
                    total: 8998,
                    stock: 6
                }, {
                    comm_isok: false,
                    comm_img: './images/4.png',
                    comm_id: 1008,
                    comm_int: '这是一家很不错的店里面的货物',
                    comm_big: '259g',
                    comm_price: '1998',
                    num: 1,
                    total: 1998,
                    stock: 6
                }]
            }, {
                shop_isok: false,
                shop_id: 10004,
                shop_name: '2香麻辣店',
                shop_comm: [{
                    comm_isok: false,
                    comm_img: './images/4.png',
                    comm_id: 1008,
                    comm_int: '这是一家很不错的店里面的货物',
                    comm_big: '259g',
                    comm_price: '1998',
                    num: 1,
                    total: 1998,
                    stock: 6
                }, {
                    comm_isok: false,
                    comm_id: 1008,
                    comm_img: './images/1.png',
                    comm_int: '这是一家很不错的店里面的货物',
                    comm_big: '259g',
                    comm_price: '8998',
                    num: 1,
                    total: 8998,
                    stock: 6
                }]
            }
            ]
        },
        methods: {
            add(index, idx) {//加
                //index：店铺索引  idx：商品索引   2,0代表要找到第三家店铺的第一个商品，数量加1
                // let num = this.goodlists[index].shop_comm[idx].num;
                // let kucun = this.goodlists[index].shop_comm[idx].stock;
                // if (num < kucun) {//如果还小于库存量就可以继续加1
                this.goodlists[index].shop_comm[idx].num++;
                // }
            },
            cut(index, idx) {
                //index：店铺索引  idx：商品索引   2,0代表要找到第三家店铺的第一个商品，数量加1
                // let num = this.goodlists[index].shop_comm[idx].num;
                // if (num > 1) {
                this.goodlists[index].shop_comm[idx].num--;
                // }
            },
            remove(index, idx) {
                let issure = confirm('您确定要删除吗?');
                if (issure) {
                    this.goodlists[index].shop_comm.splice(idx, 1);
                    if (!this.goodlists[index].shop_comm.length) {
                        //已经没有商品
                        this.goodlists.splice(index, 1);
                    }
                }

            }
        },
        watch: {
            goodlists: {//监听数量必须要小于库存，至少买一份
                deep: true,
                handler(newval) {
                    newval.forEach(shop => {
                        shop.shop_comm.forEach(good => {
                            let num = good.num;//数量
                            let kucun = good.stock;
                            if (num >= kucun) {//如果还小于库存量就可以继续加1
                                good.num = kucun;
                            }

                            if (num < 1) {
                                good.num = 1;
                            }
                        });
                    });
                }
            }
        }
    });
})();