import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useSettings} from './SettingsContext';
import {useAppColor} from './AppColorContext';

const App = () => {
    const {settings,setSettings} = useSettings();
    const {appColor} = useAppColor();

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('@AsyncSettings', jsonValue);
          console.log('stored '+jsonValue);
        } catch (e) {
          console.log("error in storeData ");
          console.dir(e);
          // saving error
        }
    }

    const clearAll = async () => {
            try {
            await AsyncStorage.clear();
            console.log("data cleared");
            } catch(e) {
            console.log("error in clearData");
            console.dir(e);
            // clear error
            }
    }

    return (
        <SafeAreaView style={{
            backgroundColor: (settings.darkMode ? appColor.darkBorder : appColor.lightBorder), 
            justifyContent: 'center', 
            flex:1
        }}>
            <View
                style={{
                flex: 1, 
                justifyContent: 'space-evenly',
                margin:20,
                padding:20,
                backgroundColor: (settings.darkMode ? appColor.darkBack : appColor.lightBack),
            }} >
                <View style={{alignItems: 'center'}}>
                    <Text style = {{fontSize: (4*settings.layoutSize), color: (settings.darkMode ? 'white' : 'black')}}>
                        App Settings
                    </Text>

                    <View style={{flex: 1}} />

                    <Text style = {{fontSize: (3*settings.layoutSize), color: (settings.darkMode ? 'white' : 'black')}}>
                        Change Display Size: {settings.layoutSize}
                    </Text>
                </View>

                
                <View style={{flexDirection: 'row'}} >
                    <View style={{flex: 1}} />
                    <View style={{flex: (settings.layoutSize/3), flexDirection: 'column'}} >
                        <TouchableOpacity
                            style={{alignItems: 'center',
                            backgroundColor: (settings.darkMode ? appColor.darkButtonBack : appColor.lightButtonBack),
                            padding: 10,
                            borderRadius: 50,
                        }}
                            onPress = {() => {setSettings({darkMode:settings.darkMode,layoutSize:5}); storeData({darkMode:settings.darkMode,layoutSize:5})}}
                        >
                            <Text style={{
                                color: (settings.darkMode ? 'white' : 'black'),
                                fontSize: (3*settings.layoutSize),
                            }}>
                                Small
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}} />
                    <View style={{flex: (settings.layoutSize/3), flexDirection: 'column'}} >
                        <TouchableOpacity
                            style={{alignItems: 'center',
                            backgroundColor: (settings.darkMode ? appColor.darkButtonBack : appColor.lightButtonBack),
                            padding: 10,
                            borderRadius: 50,
                        }}
                            onPress = {() => {setSettings({darkMode:settings.darkMode,layoutSize:10}); storeData({darkMode:settings.darkMode,layoutSize:10})}}
                        >
                            <Text style={{
                                color: (settings.darkMode ? 'white' : 'black'),
                                fontSize: (3*settings.layoutSize),
                            }}>
                                Medium
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}} />
                    <View style={{flex: (settings.layoutSize/3), flexDirection: 'column'}} >
                        <TouchableOpacity
                            style={{alignItems: 'center',
                            backgroundColor: (settings.darkMode ? appColor.darkButtonBack : appColor.lightButtonBack),
                            padding: 10,
                            borderRadius: 50,
                        }}
                            onPress = {() => {setSettings({darkMode:settings.darkMode,layoutSize:15}); storeData({darkMode:settings.darkMode,layoutSize:15})}}
                        >
                            <Text style={{
                                color: (settings.darkMode ? 'white' : 'black'),
                                fontSize: (3*settings.layoutSize),
                            }}>
                                Large
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}} />
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text style = {{fontSize: (3*settings.layoutSize), color: (settings.darkMode ? 'white' : 'black')}}>
                        Dark Mode: {settings.darkMode ? "On" : "Off"}
                    </Text>
                </View>


                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 2}} />
                    <View style={{flex: (settings.layoutSize/3), flexDirection: 'column'}}>
                        <View style={{flex: 2}} />
                        <TouchableOpacity
                            style={{alignItems: 'center', 
                            backgroundColor: (settings.darkMode ? appColor.darkButtonBack : appColor.lightButtonBack),
                            padding: 10,
                            borderRadius: 50}}
                            onPress = {() => {setSettings({darkMode:(settings.darkMode ? false : true), layoutSize:settings.layoutSize}); storeData({darkMode:(settings.darkMode ? false : true), layoutSize:settings.layoutSize})}}
                        >
                            <Text style={{
                                color: (settings.darkMode ? 'white' : 'black'),
                                fontSize: (3*settings.layoutSize),
                            }}>
                                Switch
                            </Text>
                        </TouchableOpacity>
                        <View style={{flex: 2}} />
                    </View>
                    <View style={{flex: 2}} />
                </View>
                
                <View style={{flexDirection:'row'}}>
                    <View style={{flex: 2}} />
                    <TouchableOpacity
                        style={{alignItems: 'center',
                        backgroundColor: 'red',
                        padding: 10,
                        borderRadius: 50}}
                        onPress = {() => {
                            setSettings({darkMode:false, layoutSize:10}), 
                            clearAll()
                            }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: (2*settings.layoutSize),
                        }}>
                            RESET
                        </Text>
                    </TouchableOpacity>
                    <View style={{flex: 2}} />
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