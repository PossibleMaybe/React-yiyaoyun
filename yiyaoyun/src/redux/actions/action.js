/**
 * Created by yongchunwu on 2017/6/16.
 */
function addToCart (object) {
    return {
        type:'ADD_TO_CART',
        goodsDetail:object,
    }
}

export {addToCart};