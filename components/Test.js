import React, { createContext, useContext, useState } from 'react';

import {View, Text, SafeAreaView, StyleSheet, TextInput, Keyboard,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import TabNavigator from './TabNavigator';
import Slider from '@react-native-community/slider';

//export const UserContext = createContext({ key: '', color: '', value: 0, note: '' });
console.log("UserContext")

const Test = (navigation, route ) => {
  console.log("c")
  const { selected } = route.params;
  
  const [value, setSliderValue] = useState(0);
  const [text, setText] = useState('');
  const [marked, setMarked] = useState({});   
  
  console.log("asdasda", user);
  console.log("sdasdasda", marked)
  //setMarked({...marked})
  const handleSave = () => {
    setMarked({...marked,
      [selected] : {
        dots: user,
      }})
   
      
    console.log(marked)
    navigation.navigate('Overall', { marked })  
    }


    return (
      <SafeAreaView style={{flex: 1}}>
      
      <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss() } }>
        <View style={styles.container}>
          {user.map((item) => {
            return (  
              <View key={item.key} style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 17,marginBottom: 3, marginTop: 5, textAlign: 'center'}}>
                  {item.key}: {item.value}
                </Text>
                <TextInput
                  style={styles.textArea}
                  multiline={true}
                  numberOfLines={4}
                  value={item.text}
                  onChangeText={(value) => setText(item.note = value)}
                  placeholder="Dodaj opis"
                />
                <Slider
                  maximumValue={100}
                  minimumValue={0}
                  minimumTrackTintColor="#307ecc"
                  maximumTrackTintColor="#000000"
                  thumbTintColor={item.color}
                  step={1}
                  value={item.value}
                  onValueChange={(value) => setSliderValue(item.value = value)}
                />
              </View>
            );
          })}
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity style={styles.states} onPress={() => handleSave()}>
          <Text style={styles.text}>Zapisz</Text>
      </TouchableOpacity>

      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
  justifyContent: 'center',
  backgroundColor: '#ecf0f1',
  textAlign: 'center',
},
textArea: {
  textAlign: 'center',
},
text: {
  fontSize: 20,

  textAlign: 'center',
  margin: 12,
  height: 40,
  borderWidth: 1,
  padding: 10,
  borderColor: 'blue',
  borderRadius: 10,
},
});


export default Test;