import { Button, View } from 'react-native';
import TabNavigator from './TabNavigator';

function Test({ navigation }) {

  return (
    <View>

    <Button
      title="Go to Overall"
      onPress={() => navigation.navigate('Overall')}
    />
    <TabNavigator navigation={navigation} />
    </View>
  );
}

export default Test;