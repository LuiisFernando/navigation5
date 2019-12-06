import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import Home from './pages/Home';
import Users from './pages/Users';

const Stack = createStackNavigator();

import DashboardRoutes from './routes/dashboard.routes';

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Users"
      screenOptions={{
        headerStyle: {backgroundColor: '#46eb34'},
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen
        name="Home"
        component={DashboardRoutes}
        options={{title: 'Dashboard'}}
      />
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  );
}
