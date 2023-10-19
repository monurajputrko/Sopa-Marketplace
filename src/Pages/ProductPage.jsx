import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/Product_Page_Reducer/action';
import Loading from '../Components/Loading';

function ProductPage() {

 const dispatch=useDispatch();
 const {products,loading}=useSelector((store)=>store.ProductsReducer);
 console.log(products);


 useEffect(()=>{
    getProducts(dispatch);
 },[])

 if(loading)
 {
    return <Loading/>
 }
  return (
    <div>
      <h1>Product Page</h1>
    </div>
  )
}

export default ProductPage
