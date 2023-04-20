import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet,Button, TextInput, Keyboard,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import TabNavigator from './TabNavigator';
import Slider from '@react-native-community/slider';

const state1 = {key: 'Zmęczenie', color: 'brown', value: 0, note: ''};
const state2 = {key: 'OK', color: 'blue', value: 0, note: ''};
const state3 = {key: 'Stres', color: 'red', value: 0, note: ''};
const state4 = {key: 'Dużo emocji', color: 'green', value: 0, note: ''};
const state5 = {key: 'Spokojnie', color: 'darkorange', value: 0, note: ''};
const state6 = {key: 'Odrealnienie', color: 'pink', value: 0, note: ''};
const userList = [state1, state2, state3, state4, state5,state6]

const date = new Date();
const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
console.log(dateString); 

const SliderView = ({navigation}) => {
  const [value, setSliderValue] = useState(0);
  const [text, setText] = useState('');
  const [marked, setMarked] = useState();
  
  const handleSave = () => {
    setMarked({...marked,
      [dateString] : {
        dots: userList,
      }})
      console.log(marked)
      navigation.navigate('Overall', { userList, marked })
    }

  
  return (
    <SafeAreaView style={{flex: 1}}>
    
    <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss() } }>
      <View style={styles.container}>
        {userList.map((item) => {
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
      <TabNavigator navigation={navigation} userList={userList} />
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

export default SliderView;
