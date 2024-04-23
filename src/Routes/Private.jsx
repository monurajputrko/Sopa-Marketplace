import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MyContext } from '../Context/Create';
import Swal from "sweetalert2";
export const PrivateRoute = ({children}) => {
    const { isAuth } = useContext(MyContext);
    console.log(isAuth);
  if (!isAuth) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Login First ...",
    });
    return <Navigate to="/" />
}
return (
    children
)
};
