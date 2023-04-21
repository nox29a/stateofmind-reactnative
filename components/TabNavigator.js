import { Appbar } from 'react-native-paper';


function TabNavigator({ navigation }) {
  return (
      <Appbar
          style={{justifyContent: 'space-between'}}>
        <Appbar.Action icon="archive" onPress={() => navigation.navigate('SliderView')} />
        <Appbar.Action icon="delete" onPress={() => navigation.navigate('Overall')} />
        <Appbar.Action icon="label" onPress={() => navigation.navigate('Chart')} />
        <Appbar.Action icon="delete" onPress={() => {}} />
      </Appbar>
  );
}

export default TabNavigator;