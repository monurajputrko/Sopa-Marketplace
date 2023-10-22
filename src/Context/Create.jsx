import React, { createContext, useState } from 'react';

export const MyContext = createContext();

const Create = ({children}) => {
  const [isAuth, setAuth] = useState(false);

  return (
    <MyContext.Provider value={{ isAuth, setAuth }}>
     {children}
    </MyContext.Provider>
  );
};

export default Create;
