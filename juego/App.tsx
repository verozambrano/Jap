import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main  from './Navigators/Main';
//import ScoresPage from './ScoresPage';
import Login from './screen/Login';
import Registro from './screen/Registro';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Registro" component={Registro} />
    <Stack.Screen name="Main" component={Main} />
  </Stack.Navigator>
);

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
     
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
