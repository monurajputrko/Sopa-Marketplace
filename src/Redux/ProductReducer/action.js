import axios from "axios";
import { DEC_QTY, GET_CART_ITEM, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, INC_QTY } from "./actionType";

export const getProductRequest=()=>{
    return{type:GET_PRODUCTS_REQUEST}
}

export const getProductSuccess=(payload)=>{
    return {type:GET_PRODUCTS_SUCCESS,payload:payload}
}

export const getProductFailure=()=>{
    return {type:GET_PRODUCTS_FAILURE}
}

// fetching data from api

export const getProducts=async(dispatch,baseurl)=>{

    try {
        dispatch(getProductRequest());
        const response=await axios.get(baseurl);
        console.log(response);
        dispatch(getProductSuccess(response.data));
    } catch (error) {
        dispatch(getProductFailure());
    }
}


export const Increment=(payload)=>{
    return {type:INC_QTY,payload:payload}
}

export const Decrement=(payload)=>{
    return {type:DEC_QTY,payload:payload}
}

export const getCartItem=(payload)=>{
    return{type:GET_CART_ITEM,payload:payload}
}