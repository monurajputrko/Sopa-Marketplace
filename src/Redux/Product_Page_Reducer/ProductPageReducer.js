import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType";


const initState={
    products:[],
    loading:false,
    error:false
}

export const ProductsReducer=(state=initState,action)=>{

    switch(action.type)
    {
        case GET_PRODUCTS_REQUEST:
            return{
                ...state,
                loading:true
            }

        case GET_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload
            }

        case GET_PRODUCTS_FAILURE:
            return{
                ...state,
                loading:true,
                error:true
            }
        default:
            return state;
    }
}