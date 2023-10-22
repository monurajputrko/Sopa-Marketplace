import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../../Redux/ProductReducer/action";
import Loading from "../Loading/Loading";

const Products = () => {

   const dispatch = useDispatch();
   const { products, loading } = useSelector((store) => store.ProductsReducer);
   console.log(products);
   const [filter, setFilter] = useState("all");

   let baseurl = `https://sopa-marketplace-api.vercel.app/home?_limit=8&`;
   useEffect(() => {
     if (filter !== "default") {
       baseurl = baseurl + `category=${filter}`;
       // getProducts(dispatch,baseurl);
     }
     // if (filter2 !== "default") {
     //   baseurl = baseurl + `&category=${filter2}`;
     // }
     getProducts(dispatch, baseurl);
   }, [filter]);
   console.log(filter);
   if (loading) {
     return <Loading />;
   }

    return (
      <div id="product1" class="section-p1">
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
        <div class="pro-container">
          {products.map((e) => {
            return (
              <div class="pro">
                <img src={e.image} alt="" />
                <div class="des">
                  <span>adidas</span>
                  <h5>{e.title}</h5>
                  <div class="star">
                    <i class="fas fa-star" aria-hidden="true"></i>
                    <i class="fas fa-star" aria-hidden="true"></i>
                    <i class="fas fa-star" aria-hidden="true"></i>
                    <i class="fas fa-star" aria-hidden="true"></i>
                    <i class="fas fa-star" aria-hidden="true"></i>
                  </div>
                  <h4>₹ {e.price}</h4>
                  <div>
                    <a href="#">
                      <i class="fa-solid fa-cart-shopping cart"></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          {/* 
          <div class="pro">
            <img
              src="https://64fc0bf9ece3553151c202bb--friendly-kringle-6f5f9b.netlify.app/img/products/f2.jpg"
              alt=""
              https://64fc0bf9ece3553151c202bb--friendly-kringle-6f5f9b.netlify.app/img/products/f1.jpg
            />
            <div class="des">
              <span>adidas</span>
              <h5>Floral Priented Shirt</h5>
              <div class="star">
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
              </div>
              <h4>$75</h4>
              <div>
                <a href="#">
                  <i class="fa-solid fa-cart-shopping cart"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="pro">
            <img
              src="https://64fc0bf9ece3553151c202bb--friendly-kringle-6f5f9b.netlify.app/img/products/f3.jpg"
              alt=""
            />
            <div class="des">
              <span>adidas</span>
              <h5>Flower Printed Shirt</h5>
              <div class="star">
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
              </div>
              <h4>$81</h4>
              <div>
                <a href="#">
                  <i class="fa-solid fa-cart-shopping cart"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="pro">
            <img
              src="https://64fc0bf9ece3553151c202bb--friendly-kringle-6f5f9b.netlify.app/img/products/f4.jpg"
              alt=""
            />
            <div class="des">
              <span>adidas</span>
              <h5>White Printed Shirt</h5>
              <div class="star">
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
              </div>
              <h4>$90</h4>
              <div>
                <a href="#">
                  <i class="fa-solid fa-cart-shopping cart"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="pro">
            <img
              src="https://64fc0bf9ece3553151c202bb--friendly-kringle-6f5f9b.netlify.app/img/products/f5.jpg"
              alt=""
            />
            <div class="des">
              <span>adidas</span>
              <h5>Western T-Shirt</h5>
              <div class="star">
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
              </div>
              <h4>$72</h4>
              <div>
                <a href="#">
                  <i class="fa-solid fa-cart-shopping cart"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="pro">
            <img
              src="https://64fc0bf9ece3553151c202bb--friendly-kringle-6f5f9b.netlify.app/img/products/f6.jpg"
              alt=""
            />
            <div class="des">
              <span>adidas</span>
              <h5>Double Piece Shirt</h5>
              <div class="star">
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
              </div>
              <h4>$101</h4>
              <div>
                <a href="#">
                  <i class="fa-solid fa-cart-shopping cart"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="pro">
            <img
              src="https://64fc0bf9ece3553151c202bb--friendly-kringle-6f5f9b.netlify.app/img/products/f7.jpg"
              alt=""
            />
            <div class="des">
              <span>adidas</span>
              <h5>Western Lower</h5>
              <div class="star">
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
              </div>
              <h4>$64</h4>
              <div>
                <a href="#">
                  <i class="fa-solid fa-cart-shopping cart"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="pro">
            <img
              src="https://64fc0bf9ece3553151c202bb--friendly-kringle-6f5f9b.netlify.app/img/products/f8.jpg"
              alt=""
            />
            <div class="des">
              <span>adidas</span>
              <h5>Ladies Top</h5>
              <div class="star">
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
              </div>
              <h4>$49</h4>
              <div>
                <a href="#">
                  <i class="fa-solid fa-cart-shopping cart"></i>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
}

export default Products;