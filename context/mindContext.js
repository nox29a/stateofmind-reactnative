import React, { createContext, useState } from 'react';


const MyContext = createContext(); // tworzenie kontekstu

const date = new Date();
const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;


const MyProvider = ({ children }) => {
  const [selected, setSelected] = useState(dateString);
  const [marked, setMarked] = useState();  

  const handleSave = () => {
    setMarked({...marked,
      [dateString] : {
        dots: userList,
      }})
      console.log(marked)
    //   navigation.navigate('Overall', { mojProps })
    }

  return (
    <MyContext.Provider value={{ selected, setSelected, handleSave, marked, setMarked }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;