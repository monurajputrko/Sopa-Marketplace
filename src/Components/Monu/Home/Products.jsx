import { useSelector } from "react-redux";
import "./Products.css";
import Loading from "../Loading/Loading";

const Products = ({e}) => {
   const { loading } = useSelector((store) => store.ProductsReducer);

   if(loading){
    return <Loading />
   }

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
        
}

export default Products;