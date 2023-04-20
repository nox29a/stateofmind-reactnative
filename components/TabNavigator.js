import { Appbar } from 'react-native-paper';


function TabNavigator({navigation, userList, marked}) {
  return (
      <Appbar
          style={{justifyContent: 'space-between'}}>
        <Appbar.Action icon="archive" onPress={() => navigation.navigate('SliderView', { userList, marked })} />
        <Appbar.Action icon="delete" onPress={() => navigation.navigate('Overall', { userList, marked })} />
        <Appbar.Action icon="label" onPress={() => navigation.navigate('Chart', { userList, marked })} />
        <Appbar.Action icon="delete" onPress={() => {}} />
      </Appbar>
  );
}

export default TabNavigator;