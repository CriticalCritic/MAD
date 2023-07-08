import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useSettings} from './SettingsContext';
import {useAppColor} from './AppColorContext';

import PageTemplate from './PageTemplate';
import LineDesign from './LineDesign';
import LayoutSizeButton from './LayoutSizeButton';

const App = ({navigation}) => {
    const {settings,setSettings} = useSettings();
    const {appColor} = useAppColor();

    const buttonColor = (settings.darkMode ? appColor.darkButtonBack : appColor.lightButtonBack);
    const textColor = (settings.darkMode ? appColor.darkText : appColor.lightText);

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('@AsyncSettings', jsonValue);
          console.log('stored '+jsonValue);
        } catch (e) {
          console.log("error in storeData ");
          console.dir(e);
        }
    }

    return (
        <PageTemplate spacing='space-between'>
            <StatusBar style="auto" barStyle={{color: textColor}} />
            <LineDesign color={textColor}>
                <Text style = {{
                    fontSize: (4*settings.layoutSize), 
                    color: textColor,
                    fontWeight: 'bold',
                    fontFamily: 'notoserif',
                }}>
                    App Settings
                </Text>
            </LineDesign>

            <View style={{alignItems:'center'}}>
                <Text style = {{
                    fontSize: (3*settings.layoutSize), 
                    color: textColor,
                }}>
                    Set Display Size: 
                </Text> 
            </View>
            
            <View>
            <LayoutSizeButton size='Small' textColor={textColor} storeData={storeData} />
            <LayoutSizeButton size='Medium' textColor={textColor} storeData={storeData} />
            <LayoutSizeButton size='Large' textColor={textColor} storeData={storeData} />
            </View>

            <View style={{alignItems: 'center'}}>
                <Text style = {{fontSize: (3*settings.layoutSize), color: textColor}}>
                    Dark Mode: {settings.darkMode ? "On" : "Off"}
                </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 2}} />
                <View style={{flex: (settings.layoutSize/3)}}>
                    <TouchableOpacity 
                        style={{
                            alignItems: 'center', 
                            backgroundColor: buttonColor,
                            padding: 15,
                            borderRadius: 50,
                        }}
                        onPress = {() => {setSettings({darkMode:(settings.darkMode ? false : true), layoutSize:settings.layoutSize}); storeData({darkMode:(settings.darkMode ? false : true), layoutSize:settings.layoutSize})}}
                    >
                        <Text style={{
                            color: textColor,
                            fontSize: (3*settings.layoutSize),
                        }}>
                            Switch
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 2}} />
            </View>

            <LineDesign color={textColor}>
                <TouchableOpacity 
                    style={{
                        alignItems: 'center',
                        backgroundColor: 'red',
                        padding: 15,
                        borderRadius: 50,
                    }}
                    onPress = {() => {
                        navigation.navigate('Reset');
                        }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: (2*settings.layoutSize),
                    }}>
                        RESET
                    </Text>
                </TouchableOpacity>
            </LineDesign>
        </PageTemplate>
    )
  }


export default App;

const styles = StyleSheet.create({
    bigText: {
        textAlign:'center',
        fontWeight: 'bold',
        fontFamily: 'notoserif',
    },
    text: {
        textAlign:'center',
        fontFamily: 'default',
    },
});