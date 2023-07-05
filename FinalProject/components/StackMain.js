import React,{useState} from 'react';
import {TouchableOpacity,Text,View,SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import About from './About';
import Settings from './Settings';
import Upload from './Upload';

import {useSettings} from './SettingsContext';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  const {settings} = useSettings();

  const appColor = {
    lightBack: '#f2f2f2', 
    lightBorder: '#dedede',
    lightButtonBack: '#00ff6e',
    darkBack: '#262626',
    darkBorder: 'black',
    darkButtonBack: '#004f22',
    };

    return (
      <SafeAreaView style={{
        backgroundColor: (settings.darkMode ? appColor.darkBorder : appColor.lightBorder), 
        justifyContent: 'center', 
        flex:1
      }}>
        <View style={{
            flex: 1, 
            margin:20,
            padding:20,
            backgroundColor: (settings.darkMode ? appColor.darkBack : appColor.lightBack),
            flexDirection: 'row',
          }}>
          <View style={{flex:1}}/>
          <View style={{
            flex: 1, 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignContent: 'center',}}
            >
            <View style={{flex:1}}/>
            <TouchableOpacity
                style={{alignItems: 'center',
                    backgroundColor: (settings.darkMode ? appColor.darkButtonBack : appColor.lightButtonBack),
                    padding: 10,
                    borderRadius: 50}}
                onPress={() =>
                navigation.navigate('About')
                }>
              <Text style = {{fontSize: (3*settings.layoutSize), color: (settings.darkMode ? 'white' : 'black')}}> 
                About
              </Text>
            </TouchableOpacity>
            <View style={{flex:1}}/>
            <TouchableOpacity
                style={{alignItems: 'center',
                    backgroundColor: (settings.darkMode ? appColor.darkButtonBack : appColor.lightButtonBack),
                    padding: 10,
                    borderRadius: 50}}
                onPress={() =>
                navigation.navigate('Settings')
                }>
              <Text style = {{fontSize: (3*settings.layoutSize), color: (settings.darkMode ? 'white' : 'black')}}> 
                Settings
              </Text>
            </TouchableOpacity>
            <View style={{flex:1}}/>
            <TouchableOpacity
                style={{alignItems: 'center',
                    backgroundColor: (settings.darkMode ? appColor.darkButtonBack : appColor.lightButtonBack),
                    padding: 10,
                    borderRadius: 50}}
                onPress={() =>
                navigation.navigate('Upload')
                }>
              <Text style = {{fontSize: (3*settings.layoutSize), color: (settings.darkMode ? 'white' : 'black')}}> 
                Upload
              </Text>
            </TouchableOpacity>
            <View style={{flex:1}}/>
          </View>
          <View style={{flex:1}}/>
        </View>
      </SafeAreaView>
    );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Organization Home'}} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Upload" component={Upload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
