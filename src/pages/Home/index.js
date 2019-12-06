import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home({navigation}) {
  function navitationToUsers() {
    navigation.navigate('Users');
  }
  return (
    <View>
      <Text>Home</Text>
      <Button title="Navigate to Users" onPress={navitationToUsers} />
    </View>
  );
}
