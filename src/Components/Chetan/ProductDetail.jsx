import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./ProductDetail.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment, getCartItem } from '../../Redux/ProductReducer/action';
import Swal from 'sweetalert2';
function ProductDetail() {
   const navigate = useNavigate();
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
        Swal.fire({
            title: "Great!",
            text: "Product Added To Cart",
            icon: "success"
          });
    }

    const handlePayment = (price) => {
        //   const Pr = 299;
        const checkout = Number(price * 100);
        console.log(checkout);
        const options = {
          key: "rzp_test_dnv3nQiWbqzTGt",
          amount: checkout,
          currency: "INR",
          name: "Sopa Marketplace",
          description: "Payment",
          image: "https://cdn.animaapp.com/projects/653027fd5d5a615f385b22b9/releases/653029a770b79ea74ce24116/img/logo-12@2x.png",
          handler: function (response) {
            navigate("/");
          },
          theme: {
            color: "#DE6737",
          },
        };
    
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      };

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
        <button   onClick={() => {
                    handlePayment(pro.price);
                  }} className={style.btn2}>Buy Now</button>
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
