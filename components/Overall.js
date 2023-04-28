import React, {useState,createContext, useContext, useEffect} from 'react';
import {Calendar} from 'react-native-calendars';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard,TouchableWithoutFeedback} from 'react-native';
import TabNavigator from './TabNavigator';
import { useRoute } from '@react-navigation/native';
const date = new Date();
const newDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

export const UserContext = createContext({ key: '', color: '', value: 0, note: '' });

const Overall = ({ navigation }) => {
  const [selected, setSelected] = useState(newDate);
  const [marked, setMarked] = useState({});   
  const user = useContext(UserContext);
  console.log("overall")

  console.log(marked)
  
  console.log("user",user)
  const handleSave = () => {
    console.log(selected); 
      console.log(marked)
    }

      
  return (
    <SafeAreaView  style={styles.container}>
    <Calendar 
      onDayPress={day => {
        console.log(day.dateString)
        setSelected(day.dateString)
      }}
      markingType="multi-dot"

      markedDates={{
            ...marked,
            [selected]: {selected: true}
          }}
    />
       
       <TouchableOpacity style={styles.states} onPress={() => navigation.navigate('SliderView', { selected })} >

        {user.map((item) => {
          return (  
            <View key={item.key} style={{ marginBottom: 20 }} >
              <Text style={{ fontSize: 15, marginTop: 5, textAlign: 'center'}}>
                {item.key}: {item.value}
              </Text>
              <Text style={{ fontSize: 10, color:'grey', textAlign: 'center'}}>
              {item.note}
              </Text>


            </View>
          );
        })}
       </TouchableOpacity>
       <TouchableOpacity style={styles.states} onPress={() => handleSave()}> 
            <Text style={styles.text}>Zapisz</Text>
        </TouchableOpacity>
      <TabNavigator navigation={navigation} marked={marked} />
    </SafeAreaView>
  );
};

export default Overall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 0,
    backgroundColor: "white",
  },
  states: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    columnGap: 50,
    height: 50,

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
  textArea: {
    height: 120,
    width: 320,
    color: 'white',
    borderWidth: 2,
    borderColor: 'blue',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});