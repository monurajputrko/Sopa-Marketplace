import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../Redux/ProductReducer/action';
import style from "./ProductPage.module.css"
import Pagination from './Pagination';

function ProductPage() {
  
  const[filter,setFilter]=useState("default");
  const dispatch=useDispatch();
  const {products,loading}=useSelector((store)=>store.ProductsReducer);
  console.log(products);

  let baseurl=`https://sopa-market.onrender.com/products?_page=1&_limit=10`
  useEffect(()=>{
    if(filter!=="default")
    {
      baseurl=baseurl+`&_sort=price&_order=${filter}`
      // getProducts(dispatch,baseurl);
    }
    getProducts(dispatch,baseurl);
  },[filter]);
  console.log(filter);
  if(loading)
  {
    return <Loading/>;
  }
  
  return (
    <div className={style.mainContainer}>
    <div className={style.filter}>
      <h4>Filter By : </h4>
       <select className={style.filterList} onChange={(e)=>setFilter(e.target.value)} value={filter}>
        <option value="default">--Select Filter--</option>
        <option value="asc" >Low To High</option>
        <option value="desc" >High To Low</option>
       </select>
    </div>
    <div className={style.Container}>
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
