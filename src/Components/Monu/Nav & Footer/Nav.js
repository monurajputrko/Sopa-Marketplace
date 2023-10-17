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
        {/* <Flex as="nav" padding="1.5rem" bg="teal.500" color="white">
          <Box mr="5">
            <Heading as="h6" size="md">Logo</Heading>
          </Box>
          <Box display="flex" alignItems="center">
            <Link mr="5">Home</Link>
            <Link mr="5">About</Link>
            <Link mr="5">Services</Link>
            <Link mr="5" onClick={onOpen}>Login</Link>
            <Link>Contact</Link>
          </Box>
        </Flex>
        <BackdropExample isOpen={isOpen} onClose={onClose} /> */}
        <nav  class="navbar navbar-expand-lg .bg-secondary-subtle" >
  <div class="container-fluid">
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFvPtZSosaSQwD7wliaztTcIcja9skOQ0yoMHVkaTFzKADmJYXNR1qOJV2gs_Yw158M1Fgx-_o662ddGmRzs_vDmgi8o9CKIWT_PmSslTKGngDzXSPiVwxFpEKBIXaiOI74HPbxL-0vh9rfd0lXOPO3PyFZCloTUMqg05QjW3wYlxgHhpsWkl9Dk_Vgm7i/s1600/logo.png" width="70px" class="img-thumbnail" alt="..." />
    <h1>&nbsp;SOPA</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={'/'} style={{fontWeight:"bold",fontSize:"25px"}} class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to={'product'} style={{fontWeight:"bold",fontSize:"25px"}}  class="nav-link" >Product</Link>
        </li>
       
        <li class="nav-item">
          <Link to={'contact'} style={{fontWeight:"bold",fontSize:"25px"}}  class="nav-link"   >Contact</Link>
        </li>
        <li class="nav-item">
          <Link to={'contact'} style={{fontWeight:"bold",fontSize:"25px"}}  class="nav-link" href="#"  >Disabled</Link>
        </li>
      </ul>
     
      <ul class="navbar-nav  mb-2 mb-lg-0">
      <li class="nav-item" style={{marginRight:"30px"}} >
        <FiSearch  fontSize="35px"/>
        </li>
      <li class="nav-item" style={{marginRight:"30px"}}>
        <Link to='/cart'><HiOutlineShoppingBag  fontSize="35px" /></Link>
        </li>
      <li class="nav-item" style={{marginRight:"30px"}}>
        <BiUserX  fontSize="35px" onClick={onOpen} />
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