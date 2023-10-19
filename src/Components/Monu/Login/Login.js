import React, { useState } from "react";
import "./Login.css";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";



const Login = ({onClose,setImg1,setM}) => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const firebaseConfig = {
    apiKey: "AIzaSyDZcCwWRlB5n4qB4V1ZAPS8g9hHN4a3jUw",
    authDomain: "sopa-332de.firebaseapp.com",
    projectId: "sopa-332de",
    storageBucket: "sopa-332de.appspot.com",
    messagingSenderId: "588670818449",
    appId: "1:588670818449:web:d2ad314d90d2358d6dc730",
    measurementId: "G-MYV11W22L6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
   const auth = getAuth(app);
  
 const provider = new GoogleAuthProvider();
  
  const signinWithgoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setImg1(result.user.photoURL);
        console.log(result.user.photoURL);
        setM();
        onClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <div  className={`container ${isSignup ? "right-panel-active" : ""}`}>
      <div   className="form-container sign-up-container">
        <form   action="">
          <h1>Create Account</h1>
          <div   className="social-container">
            <a href="#" className="social">
              <FaFacebookF />
            </a>
            <a href="#" className="social">
              <FaGoogle onClick={signinWithgoogle} />
            </a>
            <a href="#" className="social">
              <FaTwitter />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button id="button1">SignUp</button>
        </form>
      </div>
      <div   className="form-container sign-in-container">
        <form   action="#">
          <h1>Sign In</h1>
          <div   className="social-container">
            <a href="#" className="social">
              <FaFacebookF />
            </a>
            <a href="#" className="social">
              <FaGoogle onClick={signinWithgoogle} />
            </a>
            <a href="#" className="social">
              <FaTwitter />
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <a href="#">Forgot Your Password</a>
          <button id="button1">Sign In</button>
        </form>
      </div>
      <div   className="overlay-container">
        <div   className="overlay">
          <div   className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button  id="button2"  className="ghost" onClick={toggleForm}>
              Sign In
            </button>
          </div>
          <div   className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start the journey with us</p>
            <button id="button2" className="ghost" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
