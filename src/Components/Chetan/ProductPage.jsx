import React, { useEffect } from 'react'
import Loading from './Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../Redux/ProductReducer/action';
import style from "./ProductPage.module.css"
import Pagination from './Pagination';

function ProductPage() {

  const dispatch=useDispatch();
  const {products,loading}=useSelector((store)=>store.ProductsReducer);
  console.log(products);

  useEffect(()=>{
    getProducts(dispatch);
  },[]);

  if(loading)
  {
    return <Loading/>;
  }
  
  return (
    <div>
    <div className={style.mainContainer}>
      {products?.map((ele)=>(
        <div className={style.card}>
          <img src={ele.image}/>
          <h4>{ele.title}</h4>
          <div className={style.detail}>
           <p>Ratings:{ele.rating}</p>
           <p>₹:{ele.price}/-</p>
          </div>
        </div>
      ))}
    </div>
    <Pagination/>
    </div>
  )
}

export default ProductPage
