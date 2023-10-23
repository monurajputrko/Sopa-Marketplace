import React, { useEffect, useState } from 'react'
import Loading from '../Monu/Loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../Redux/ProductReducer/action';
import style from "./ProductPage.module.css"
import Pagination from './Pagination';
import axios from 'axios';

function ProductPage() {
  
  const[filter,setFilter]=useState("default");
  const[filter2,setFilter2]=useState("default");
  const[page,setPage]=useState(1);
  const[totalPage,setTotalPage]=useState(1);
  const dispatch=useDispatch();
  const {products,loading}=useSelector((store)=>store.ProductsReducer);
  console.log(products);

  
  const getTotalPage= async()=>{
    try {
      const res=await axios.get('https://sopa-marketplace-api.vercel.app/products');
      console.log(Math.round(res.data.length/10));
      setTotalPage(Math.round(res.data.length/10));
    } catch (error) {
      
    }
  }
  
  const changePage=(value)=>{
    setPage(value);
  }
  let baseurl=`https://sopa-marketplace-api.vercel.app/products?_page=${page}&_limit=10`


  // let baseurl=`https://sopa-marketplace-api.vercel.app/products?_page=1&_limit=10`

  useEffect(()=>{
    getTotalPage();
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
  },[filter,filter2,page]);
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
    <Pagination page={page} totalPage={totalPage} changePage={changePage}/>
    </div>
  )
}

export default ProductPage
