import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {View} from 'react-native';

import Profile from './Profile';
import AgePage from './AgePage';
import BMIPage from './BMIPage';

const Tab = createBottomTabNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({ 
          tabBarActiveTintColor: 'cornflowerblue',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View>
            <Ionicons name={'menu'} size={size+20} color={color} />
            <Ionicons name={'menu'} size={size+20} color={color} />
            </View>
            )},
          tabBarStyle: { height: 100, },
          tabBarLabelStyle: { fontSize: 25},
          headerTitleStyle: { fontSize: 40},
        })}>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Age" component={AgePage} />
        <Tab.Screen name="BMI" component={BMIPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
