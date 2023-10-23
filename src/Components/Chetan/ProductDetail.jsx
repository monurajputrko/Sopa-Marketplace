import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from "./ProductDetail.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment, getCartItem } from '../../Redux/ProductReducer/action';
function ProductDetail() {

    const{id}=useParams();
    console.log(id);
    const dispatch=useDispatch();
    const value=useSelector((store)=>store.QuantityReducer);
    console.log(value)

    const[pro,setPro]=useState({});

    const getPro=async(id)=>{
        try {
            const req=await axios.get(`https://sopa-marketplace-api.vercel.app/products/${id}`);
            console.log(req);
            setPro(req.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getPro(id);
    },[]);
     
    const handelAdd=()=>{
        dispatch(Increment(1))
    }
    const handelSub=()=>{
        dispatch(Decrement(1))
    }

    const handelCart=async ()=>{
       
        const item={
            id:pro.id,
            image:pro.image,
            title:pro.title,
            price:pro.price,
            category:pro.category,
            quantity:value.quantity
        }

        dispatch(getCartItem(item));
        alert("item added to cart")
    }
  return (
    <div className={style.mainContainer}>
    
     <div className={style.container}>
        <div className={style.image}>
        <img src={pro.image}/>
        </div>
        <div className={style.ProductDetail}>
        <h4>{pro.title}</h4>
        <h6>{pro.category}</h6>
        <p>100+ bought in past month</p>
        <hr></hr>
        <p>Rating : {pro.rating}</p>
        <h4>₹ {pro.price}/-</h4>
        <hr></hr>
        <div >
        <button className={style.qty} id={style.sub} onClick={handelSub} disabled={value.quantity===1}>-</button>
        <button className={style.qty}>{value.quantity}</button>
        <button className={style.qty} id={style.add} onClick={handelAdd}>+</button>
        
        </div>
        <div className={style.btn}>
        <button className={style.btn2}>Buy Now</button>
        <button className={style.btn2} onClick={handelCart} >Add to Cart</button>
        </div>
        <br></br>
        <br></br>
        <h5>Product Details</h5>
        <hr></hr>
        <p>{pro.description}</p>
        </div>
     </div>
      
    </div>
  )
}

export default ProductDetail
