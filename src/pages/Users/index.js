import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Users({navigation}) {
  function navitationToUsers() {
    navigation.navigate('Home', {screen: 'Settings'});
  }
  return (
    <View>
      <Text>Users</Text>
      <Button title="Navigate to Dashboard" onPress={navitationToUsers} />
    </View>
  );
}
