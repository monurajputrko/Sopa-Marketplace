/* eslint-disable no-unused-vars */
import { Box, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import Login from "../Login/Login";
import { FiSearch } from "react-icons/fi";
import { BiUserX,BiUserCheck } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import React from "react";

export const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <div>
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
            Free Shiping on Over Rs.500
          </p>
        </div>
        <nav
          class="navbar navbar-expand-lg .bg-secondary-subtle"
        >
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
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to={"product"}
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
                  <FiSearch fontSize="30px" />
                </li>
                <li class="nav-item" style={{ marginRight: "30px" }}>
                  <Link to="/cart">
                    <HiOutlineShoppingBag fontSize="30px" />
                  </Link>
                </li>
                <li class="nav-item" style={{ marginRight: "30px" }}>
                  <BiUserX fontSize="30px" onClick={onOpen} />
                </li>
                {/* <button class="btn btn-outline-success" onClick={onOpen}>Login</button> */}
              </ul>
            </div>
          </div>
        </nav>
        <BackdropExample isOpen={isOpen} onClose={onClose} />
      </div>
    );
  }
  
  function BackdropExample({ isOpen, onClose }) {
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
              <Login />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    )
  }