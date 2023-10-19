import "./footer.css";


const Footer = () => {

    return (
      <div>
       

        <footer   class="section-p1">
      
          <div class="col">
            <img
              class="logo"
              style={{width:"70%"}}
              src="https://cdn.animaapp.com/projects/653027fd5d5a615f385b22b9/releases/653029a770b79ea74ce24116/img/logo-12@2x.png" alt=""
            />
            <h2>Contact</h2>
            <p style={{fontSize:"90%",fontWeight:"bold"}}>
              <strong>Address : </strong>869 Chandni Chowk
            </p>
            <p style={{fontSize:"90%",fontWeight:"bold"}}>
              <strong>Phone : </strong>+91 9664366346
            </p>
            <p style={{fontSize:"90%",fontWeight:"bold"}}>
              <strong>Hours :</strong>10:00 - 18:00. Mon-Sat
            </p>

            {/* <div class="follow">
              <h2>Follow Us</h2>
              <div class="icon">
                <a style={{fontSize:"90%",fontWeight:"bold"}} href="https://www.linkedin.com/in/monurajputrko/">
                <img style={{width:"10%",marginRight:"15px" }} src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png" alt="m" />
                </a>
                <a style={{fontSize:"90%",fontWeight:"bold"}} href="https://www.instagram.com/monurajputrko/">
                <img style={{width:"10%",marginRight:"15px" }} src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="m" />
                </a>
                <a style={{fontSize:"90%",fontWeight:"bold"}} href="https://www.youtube.com/">
                <img style={{width:"10%",marginRight:"15px" }} src="https://cdn-icons-png.flaticon.com/128/3669/3669688.png" alt="m" />
                </a>
              </div>
            </div> */}
          </div>

          <div class="col">
            <h2>About</h2>
            <a style={{fontSize:"90%",fontWeight:"bold"}} href="#">About us</a>
            <a style={{fontSize:"90%",fontWeight:"bold"}} href="#">Delivery Information</a>
            <a style={{fontSize:"90%",fontWeight:"bold"}} href="#">Privacy Policy</a>
            <a style={{fontSize:"90%",fontWeight:"bold"}} href="#">Terms &amp; Conditions</a>
            <a style={{fontSize:"90%",fontWeight:"bold"}} href="#">Contact Us</a>
          </div>

          <div class="col">
            <h2>My Account</h2>
            
            <a style={{fontSize:"90%",fontWeight:"bold"}} href="#">Sign in</a>
            <a style={{fontSize:"90%",fontWeight:"bold"}} href="#">View Cart</a>
            <a style={{fontSize:"90%",fontWeight:"bold"}} href="#">My Wishlist</a>
            <a style={{fontSize:"90%",fontWeight:"bold"}} href="#">Track My Order</a>
            <a style={{fontSize:"90%",fontWeight:"bold"}} href="#">Help</a>
          </div>

          <div id="hide" class="col install">
            <h2>Install App</h2>
            <p style={{fontSize:"90%",fontWeight:"bold"}}>From App Store or Google Play Store</p>
            <div class="row">
              <img
              id="hide" 
              style={{width:"70%"}}
                src="https://64fc0bf9ece3553151c202bb--friendly-kringle-6f5f9b.netlify.app/img/pay/app.jpg"
                alt=""
              />
              <img
              id="hide" 
              style={{width:"70%"}}
                src="https://64fc0bf9ece3553151c202bb--friendly-kringle-6f5f9b.netlify.app/img/pay/play.jpg"
                alt=""
              />
            </div>
            <p style={{fontSize:"90%",fontWeight:"bold"}}>Secured Payment Gateway</p>
            <img
            id="hide" 
              src="https://64fc0bf9ece3553151c202bb--friendly-kringle-6f5f9b.netlify.app/img/pay/pay.png"
              alt=""
            />
          </div>
        </footer>
      </div>
    );
}

export default Footer;