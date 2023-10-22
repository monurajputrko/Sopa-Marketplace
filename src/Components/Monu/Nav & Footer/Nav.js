/* eslint-disable no-unused-vars */
import { Box, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import Login from "../Login/Login";
import { FiSearch } from "react-icons/fi";
import { BiUserX,BiUserCheck } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import React,{useState} from "react";



export const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
   const [img,setImg] = useState("");
   const [flag,setFlag] = useState(false);
    
    console.log("setImg",img);
   
    return (
      <div >
        <div
          style={{
            backgroundColor: "black",
            height: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "white", fontWeight: "bold" }}>
            Free Shiping on Orders Over{" "}
            <p
              style={{
                color: "#DE6737",
                display: "inline",
                fontWeight: "bold",
              }}
            >
              Rs.500
            </p>
          </p>
        </div>
        <nav class="navbar navbar-expand-lg .bg-secondary-subtle">
          <div class="container-fluid">
            <img
              src="https://cdn.animaapp.com/projects/653027fd5d5a615f385b22b9/releases/653029a770b79ea74ce24116/img/logo-12@2x.png"
              width="100px"
              class="img-thumbnail"
              alt="..."
            />
            {/* <h1>&nbsp;SOPA</h1> */}
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    to={"/"}
                    style={{
                      color: "#DE6737",
                      fontWeight: "bolder",
                      fontSize: "20px",
                    }}
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to={"/products"}
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                    class="nav-link"
                  >
                    Product
                  </Link>
                </li>

                <li class="nav-item">
                  <Link
                    to={"contact"}
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                    class="nav-link"
                  >
                    Contact
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to={"contact"}
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                    class="nav-link"
                    href="#"
                  >
                    Disabled
                  </Link>
                </li>
              </ul>

              <ul class="navbar-nav  mb-2 mb-lg-0">
                <li class="nav-item" style={{ marginRight: "30px" }}>
                  <FiSearch style={{ color: "#DE6737" }} fontSize="30px" />
                </li>
                <li class="nav-item" style={{ marginRight: "30px" }}>
                  <Link to="/cart">
                    <HiOutlineShoppingBag
                      style={{ color: "#DE6737" }}
                      fontSize="30px"
                    />
                  </Link>
                </li>
                <li class="nav-item" style={{ marginRight: "30px" }}>
                  {!flag ? (
                    <BiUserX
                      fontSize="30px"
                      style={{ color: "#DE6737" }}
                      onClick={onOpen}
                    />
                  ) : (
                    <img
                      style={{ borderRadius: "50%", marginLeft: "-60%" }}
                      width="35%"
                      src={img}
                      alt="mm"
                    />
                  )}
                </li>
                {/* <button class="btn btn-outline-success" onClick={onOpen}>Login</button> */}
              </ul>
            </div>
          </div>
        </nav>
        <BackdropExample
          isOpen={isOpen}
          onClose={onClose}
          setImg={setImg}
          setFlag={setFlag}
        />
      </div>
    );
  }
  
  function BackdropExample({ isOpen, onClose,setImg,setFlag }) {
    const [img1,setImg1] = useState();
    const [flag1,setFlag1] = useState(false);
    setImg(img1);
    const setM = ()=>{
      setFlag(true);
      setFlag1(true);
    }

    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
    return (
      <Box>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent display="flex" alignItems="center" justifyContent="center">
            
            <ModalBody display="flex" justifyContent="center" alignItems="center" mt="10%">
            {/* <ModalCloseButton style={{width:"50px"}} mt="-65%"/> */}
            <button type="button" class="btn btn-outline-secondary" style={{marginTop: "-65%"}} onClick={onClose}>Close</button>
              <Login onClose={onClose} setImg1={setImg1} setM={setM} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    )
  }