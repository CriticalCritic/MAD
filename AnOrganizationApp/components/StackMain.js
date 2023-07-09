import React from 'react';
import  { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import InfoPage from './InfoPage';
import OrganizeElementsStack from './OrganizeElementsStack';
import SettingsStack from './SettingsStack';

import { useSettings } from './SettingsContext';
import { useAppColor } from './AppColorContext';

const Tab = createBottomTabNavigator();

const MyStack = () => {
  const {settings} = useSettings();
  const {appColor} = useAppColor();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Info') {
            iconName = 'information-circle';
          } else if (route.name === 'Organize') {
            iconName = 'copy';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } 
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: appColor.highlight,
        tabBarInactiveTintColor: (settings.darkMode ? appColor.darkTab : appColor.lightTab),
        headerShown: false,
        tabBarLabelStyle: { 
          fontWeight: 'bold', 
        },
        tabBarStyle: { 
          backgroundColor: (settings.darkMode ? appColor.darkBorder : appColor.lightBorder), 
          borderColor:  (settings.darkMode ? appColor.darkBorder : appColor.lightBorder)
        },
      })}>
        <Tab.Screen name="Info" component={InfoPage} />
        <Tab.Screen name="Organize" component={OrganizeElementsStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
