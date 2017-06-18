/**
 * Created by yongchunwu on 2017/6/16.
 */


function addToCart(state={
    num:0,
    goods:[],
},action){

    switch (action.type){
        case "ADD_TO_CART":
            return Object.assign({},state,{
                num:state.num+1,
                goods:state.goods.concat(action.goodsDetail),
            });
            break;
        default :
            return state;

    }



}

export {addToCart}