import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import {useSettings} from './SettingsContext';
import {useAppColor} from './AppColorContext';

const LayoutSizeButton = ({size, textColor, storeData}) => {
    const {settings,setSettings} = useSettings();
    const {appColor} = useAppColor();

    const sizeNum = 
        ((size ==='Small') ? 5 : ((size ==='Medium') ? 7 : ((size ==='Large') ? 10 :null)))

    return (
        <View style={{ 
            flexDirection: 'row', 
            margin: 15, 
            alignItems: 'center', 
            justifyContent:'center'
            }}>
            <View style={{flex: 1}} />
            <TouchableOpacity
                    style={{
                        flex: (settings.layoutSize/3),
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: (settings.layoutSize == sizeNum ? (settings.darkMode ? appColor.darkButtonBack : appColor.lightButtonBack) : (settings.darkMode ? 'gray' : 'lightgray')),
                        padding: 20,
                        borderRadius: 50,
                    }}
                    onPress = {() => {setSettings({darkMode:settings.darkMode,layoutSize:sizeNum}); storeData({darkMode:settings.darkMode,layoutSize:sizeNum})}}
                >
                    <Text style={{
                        color: textColor,
                        fontSize: (3*settings.layoutSize),
                    }}>
                        {size}
                    </Text>
            </TouchableOpacity>
            <View style={{flex: 1}} />
        </View>
    );
}
export default LayoutSizeButton;