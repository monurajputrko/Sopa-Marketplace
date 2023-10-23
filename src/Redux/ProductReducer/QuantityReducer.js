import { DEC_QTY, GET_CART_ITEM, INC_QTY } from "./actionType"

const initState={
    cartItem:[],
    quantity:1
}
export const QuantityReducer=(state=initState,action)=>{
    switch(action.type){

        case INC_QTY:{
            return {...state,
                quantity:state.quantity+action.payload}
        }
        case DEC_QTY:{
            return {...state,
                quantity:state.quantity-action.payload}
        }
        case GET_CART_ITEM:{
            return{
                ...state,
                carItem:state.cartItem.push(action.payload),
            }
        }
       
        default:
            return state;
    }
}