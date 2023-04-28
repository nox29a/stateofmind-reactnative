import { Appbar } from 'react-native-paper';


function TabNavigator({navigation, marked}) {
  return (
      <Appbar
          style={{justifyContent: 'space-between'}}>
        <Appbar.Action icon="archive" onPress={() => navigation.navigate('SliderView', { marked })} />
        <Appbar.Action icon="delete" onPress={() => navigation.navigate('Overall', { marked })} />
        <Appbar.Action icon="label" onPress={() => navigation.navigate('Chart', { marked })} />
        <Appbar.Action icon="delete" onPress={() => {}} />
      </Appbar>
  );
}

export default TabNavigator;