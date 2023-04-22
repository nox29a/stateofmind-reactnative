import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import  MyContext  from '../context/MyContext'

const Test = () => {
    
const { myState } = useContext(MyContext)
if (myState === undefined) {console.log('Testing')}

  return (
    <View>
      <Text>{myState}</Text>
    </View>
  );
};

export default Test;