import React, {useState, useContext} from 'react';
import {View, Text, SafeAreaView, StyleSheet,Button, TextInput, Keyboard,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import TabNavigator from './TabNavigator';
import Slider from '@react-native-community/slider';
import  MyContext  from '../context/mindContext'
import MyProvider from '../context/mindContext';




const SliderView = ({navigation}) => {
  const { userList } = useContext(MyContext)



  const handleButton = () => {
    
    navigation.navigate('Overall',)
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
    <TouchableOpacity style={styles.states} onPress={() => handleButton()}>
        <Text style={styles.text}>Zapisz</Text>
    </TouchableOpacity>
      <TabNavigator navigation={navigation}  />
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
