import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../Redux/ProductReducer/action';
import style from "./ProductPage.module.css"
import Pagination from './Pagination';

function ProductPage() {
  
  const[filter,setFilter]=useState("default");
  const[filter2,setFilter2]=useState("default");
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
    if(filter2!=="default")
    {
      baseurl=baseurl+`&category=${filter2}`
    }
    getProducts(dispatch,baseurl);
  },[filter,filter2]);
  console.log(filter);
  if(loading)
  {
    return <Loading/>;
  }
  
  return (
    <div className={style.mainContainer}>
    <div className={style.filter}>
      <h6>Filter By : </h6>
       <select className={style.filterList} onChange={(e)=>setFilter(e.target.value)} value={filter}>
        <option value="default">--By Price--</option>
        <option value="asc" >Low To High</option>
        <option value="desc" >High To Low</option>
       </select>
       <select value={filter2} onChange={(e)=>setFilter2(e.target.value)} className={style.filterList}>
       <option value="default">--By Gender--</option>
        <option value="men">For Men</option>
        <option value="women">For Women</option>
       </select>
       <button onClick={()=>{setFilter("default");setFilter2("default")}} 
       className={style.btn}
       >Clear Filter</button>
    </div>
    <div className={style.Container}>
      {products?.map((ele)=>(
        <div className={style.card} onClick={()=>console.log("clicked")}>
          <img src={ele.image}/>
          <h4>{ele.title}</h4>
          <div className={style.detail}>
           <p>Ratings:{ele.rating}</p>
           <p style={{color:"#de6737"}}>₹:{ele.price}/-</p>
          </div>
        </div>
      ))}
    </div>
    <Pagination/>
    </div>
  )
}

export default ProductPage
