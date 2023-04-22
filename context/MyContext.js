import React, { createContext, useEffect, useState } from 'react';
import  Test  from '../components/Test'
export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState(() => 100 + 100);
  useEffect(() => {
    myState = 100
    setMyState(100);
  }, []);
  return (
    <MyContext.Provider value={{ myState:0, setMyState }}>
      {children}
    </MyContext.Provider>
  );
};

export default  MyProvider ;