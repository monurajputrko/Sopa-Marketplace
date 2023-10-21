import axios from "axios";
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType";

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

export const getProducts=async(dispatch)=>{

    try {
        dispatch(getProductRequest());
        const response=await axios.get(`https://sopa-market.onrender.com/products`);
        console.log(response);
        dispatch(getProductSuccess(response.data));
    } catch (error) {
        dispatch(getProductFailure());
    }
}
