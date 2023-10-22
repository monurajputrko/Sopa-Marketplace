import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MyContext } from '../Context/Create';

export const PrivateRoute = ({children}) => {
    const { isAuth } = useContext(MyContext);
    console.log(isAuth);
  if (!isAuth) {
    return <Navigate to="/" />
}
return (
    children
)
};
