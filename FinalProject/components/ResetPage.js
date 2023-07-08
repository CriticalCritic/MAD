import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useSettings} from './SettingsContext';
import {useAppColor} from './AppColorContext';
import { useImages } from './ImagesContext';

import PageTemplate from './PageTemplate';

const App = ({navigation}) => {
    const {settings,setSettings} = useSettings();
    const {appColor} = useAppColor();
    const {images,setImages} = useImages();

    const textColor = (settings.darkMode ? appColor.darkText : appColor.lightText);

    const clearAll = async () => {
            try {
            await AsyncStorage.clear();
            console.log("data cleared");
            } catch(e) {
            console.log("error in clearData");
            console.dir(e);
            }
    }

    return (
        <PageTemplate spacing='space-evenly'>
            <StatusBar style="auto" barStyle={{color: textColor}} />
            <View style={{
                alignItems: 'center', 
                margin: 10, 
                borderWidth:3,
                borderColor: textColor, 
                paddingTop: 10, 
                paddingBottom: 10
            }}>
                <Text style = {{fontSize: (4*settings.layoutSize), color: textColor, textAlign: 'center'}}>
                    Reset All Stored Data?
                </Text>

                <View style={{flex: 1}} />

                <Text style = {{fontSize: (3*settings.layoutSize), color: textColor, textAlign: 'center'}}>
                    This includes all uploads and settings
                </Text>

                <Text style = {{fontSize: (3*settings.layoutSize), color: textColor, textAlign: 'center'}}>
                    Can not be undone
                </Text>
            </View>
            
            <View style={{flexDirection:'row'}}>
                <View style={{flex: 2}} />
                <TouchableOpacity
                    style={{alignItems: 'center',
                    backgroundColor: 'red',
                    padding: 10,
                    borderRadius: 50}}
                    onPress = {() => {
                        setSettings({darkMode:false, layoutSize:7}), 
                        setImages([]),
                        clearAll(),
                        alert('Data cleared')
                        navigation.navigate('SettingsPage')
                        }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: (3*settings.layoutSize),
                    }}>
                        RESET
                    </Text>
                </TouchableOpacity>
                <View style={{flex: 2}} />
            </View>
        </PageTemplate>
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