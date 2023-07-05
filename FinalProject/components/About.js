import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

import {useSettings} from './SettingsContext';
import {useAppColor} from './AppColorContext';

const App = () => {
  const {settings} = useSettings();
  const {appColor} = useAppColor();
    
    return (
      <SafeAreaView 
      style={{
        backgroundColor: (settings.darkMode ? appColor.darkBorder : appColor.lightBorder), 
        justifyContent: 'center', 
        flex:1
        }}>
            <View
                style={{
                flex: 1, 
                justifyContent: 'center',
                alignItems: 'center',
                margin:20,
                padding:20,
                backgroundColor: (settings.darkMode ? appColor.darkBack : appColor.lightBack),
            }} >
            <View style={{alignItems: 'center', flexDirection: 'column'}}>
                <Text style = {{
                  fontSize: (5*settings.layoutSize), 
                  color: (settings.darkMode ? 'white' : 'black')
                  }}>
                    An Organization App
                </Text>

                <View style={{flex: 3}} />

                <Text style = {{
                  fontSize: (4*settings.layoutSize), alignItems: 'center', 
                  color: (settings.darkMode ? 'white' : 'black')}}>
                    By: Daniel Olevsky
                </Text>

                <View style={{flex: 3}} />

                <Text style = {{
                  fontSize: (3*settings.layoutSize), 
                  alignItems: 'center', 
                  color: (settings.darkMode ? 'white' : 'black')}}>
                    An app to organize text, images, and audio for free
                </Text>
            </View>
          </View>
      </SafeAreaView>
    )
  }


export default App;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });