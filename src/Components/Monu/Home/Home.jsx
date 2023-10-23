
import { useDispatch, useSelector } from "react-redux";
import "./Home.css"
import "./Products.css"
import Products from "./Products";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../../Redux/ProductReducer/action";
const Home = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.ProductsReducer);
   console.log(products);
   const [filter, setFilter] = useState("all");

   let baseurl = `https://sopa-marketplace-api.vercel.app/home?_limit=8&`;
   useEffect(() => {
     if (filter !== "default") {
       baseurl = baseurl + `category=${filter}`;
     }
     getProducts(dispatch, baseurl);
   }, [filter]);
   console.log(filter);
  return (
    <div>
      <div  style={{display:"flex",flexWrap:"wrap",flexDirection:"row",width:"100%"}} >
        <div id="home" >
          <div id="home3" style={{flex: "1 0 0%",marginRight:"-6%"}}>
           <Link to={'/products'}>
              <img
                style={{width:"100%",}}
                src="https://cdn.animaapp.com/projects/653027fd5d5a615f385b22b9/releases/653029a770b79ea74ce24116/img/hero-1.svg"
                alt="mmm"
              />
              </Link>
          </div>
          <div id="home3" >
           <div id="home2" style={{alignItems:"center",justifyContent:"center"}} >
           <Link to={'/products'}>
           <img
                style={{width:"50%",borderRadius:"5%"}}
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRghYXXltBXhPZmLkJa_56h8vAfZrSRP23tk8hT-NYK9f5VgUMm_Ly81KnDkgK_gX1WjLdK18nLSGaKe0sEyzWvWRauR_yI_A2Fd5Ufazr5beg7pqpMp0sPQBiweRjG2UBIPZYVmMSpsnqLSQYBKkz2Eg0At_fiAebYsPaEfFHzBaf1reY7owl89AgeGRU/s320/Real.png"
                alt="mmm"
              />
              </Link>
           </div>

           <div class="d-flex flex-row mb-3">
           <div >
           <Link to={'/products'}>
           <img
               style={{width:"85%",borderRadius:"5%"}}
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3bweEvwwTZeEEzFsZ-l9a-3aZEUP0rYi-qy4cO7vb5REie01ieeBsdJ8DyfagaLmgHjDw88_ROe7HJBytMmIn3NeT6U0bLrHGAR92fnR8CDsWLlI4tL5la2zjKWJi4D4z9TvRB_NaYBFSTWOln6AiO8K0RkIY0QgiADwoTzidJEnsgRj9-qfwAMr6ftFw/s320/tranding.png"
                alt="mmm"
              />
               </Link>
            </div>
            <div >
            <Link to={'/products'}>
            <img
             style={{width:"100%",borderRadius:"5%"}}
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4WJPa0n8RaLGBJ73mhdxBuyQ9sMQWHSgUHkIo1MTB_nB4ec6ByHEKaElEj2Ryoadz_6sHGV4MnOD08Ht3XcWFCCld748sPeG1ZRLt0lxTWYMmgUwfA0EqKC0ZfcbhQn9VaTCxNTpvC1Yk-7s60mLLW1pLhy00SAEc-S_wKuqgWinI3ucI7ps0nNhYJ0XB/s320/oldbut.png"
                alt="mmm"
              />
               </Link>
            </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <div  class="d-flex p-2" style={{alignItems:"center",justifyContent:"center"}}><h6 style={{fontSize:"200%"}}><h5 style={{display:"inline",color:"#DE6737",fontSize:"100%",fontWeight:"bold"}}>SOPA</h5> makes clothes
to elevate everyday life 
through <h5 style={{display:"inline-block",color:"#DE6737",fontSize:"100%",fontWeight:"bold"}}>Lighthearted</h5> escapism. While styles vary by <h5 style={{display:"inline-block",color:"#DE6737",fontSize:"100%",fontWeight:"bold"}}> Season</h5>
<br /> all <h5 style={{display:"inline-block",color:"#DE6737",fontSize:"100%",fontWeight:"bold"}}>Collections </h5> are guided by the ineffablef
sense of freedom that comes with <h5 style={{display:"inline-block",color:"#DE6737",fontSize:"100%",fontWeight:"bold"}}>Travel</h5>.</h6></div>
<br />
<h1 >SHOP BY <h1 style={{display:"inline",color:"#DE6737"}}>ESSENTIALS</h1></h1>
<br />

{/* ------------- Product Cards ------------------------------------------------ */}

<div
        
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
           className="Mdiv"
            style={{
              display: "inline",
              fontSize: "25px",
              border: "2px solid black",
              margin: "1%",
              backgroundColor: "#DE6737",
            }}
            onClick={() => {
              setFilter("all");
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>All</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div
          className="Mdiv"
            style={{
              display: "inline",
              fontSize: "25px",
              border: "2px solid black",
              margin: "1%",
              "&:hover": {
                backgroundColor: "red",
                color: "white",
              },
            }}
            onClick={() => {
              setFilter("winter");
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Winter collections</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div
          className="Mdiv"
            style={{
              display: "inline",
              fontSize: "25px",
              border: "2px solid black",
              margin: "1%",
            }}
            onClick={() => {
              setFilter("new");
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;<strong>New Arrivals</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div
          className="Mdiv"
            style={{
              display: "inline",
              fontSize: "25px",
              border: "2px solid black",
              margin: "1%",
            }}
            onClick={() => {
              setFilter("best");
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Best Sellers</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div
          className="Mdiv"
            style={{
              display: "inline",
              fontSize: "25px",
              border: "2px solid black",
              margin: "1%",
            }}
            onClick={() => {
              setFilter("flash");
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Flash Sale</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
        <div id="product1" class="section-p1">
        
        <div class="pro-container">
{
  products.map((e)=>(
    <Products key={e.id} e={e} />
  ))
}
 </div>
 </div>

<br /><br />
<div style={{backgroundColor: "#F2F2F3"}} class="d-flex justify-content-center">

<div>
  <img width="100%" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWAchrc8zIxfQZjEsqoKBi9XFn0Bn7r5u1Ja6LEx2KpDofSWehbF-7dB8ewGK5Xnm7qRgMG65JvsU7jibVI1dN19bZMDb1tRph049k5hXj0TdKaMcHy1-i5LyxYRCd3IHL5dQs_3Xe33Ifq6a-MmAQ3XaskiZgbars7ZiUPK8sBiOi7O9zskf00_YxaFY5/s16000/mmm.png" alt="mm" />
</div>
</div>
<h1 style={{backgroundColor: "#F2F2F3"}}></h1>
<h1 style={{backgroundColor: "#F2F2F3"}}> Want To <h1 style={{display:"inline",color:"#DE6737"}}>Design</h1> Your Own Calm We Can Do It </h1>
<h1 style={{backgroundColor: "#F2F2F3"}}></h1>
<div style={{backgroundColor: "#F2F2F3"}}>
<a href="https://www.youtube.com/watch?v=7zlOOv_vG84" target="blank">
  <img width="90%" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhP6qSxbo0GWn8kAGkRell73IFTJbHoXfJtia4N_sHmtclOzMZKgLG1sCImpwPFmch6J5OeuuYHq1KDXLCsOglIdCLgtCOzIrDWJaJJ4PF4AIXWf4kMPd6ukDDNlmEUed_PKJNhXLhJowBc4CMe2GkusKs8q8Ikn9lrWcvBACvfivA8Q1Gj5DMHHH1uhedq/s16000/Screenshot%202023-10-19%20222406.png" alt="video" />
</a>
</div>

    </div>
  );
};

export default Home;
