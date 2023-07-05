import React,{useState} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import {useSettings} from './SettingsContext';

const UploadCount = ({upType, updateCount}) => {
    const {settings,setSettings} = useSettings();

    const appColor = {
        lightBack: '#f2f2f2', 
        lightBorder: '#dedede',
        lightButtonBack: '#00ff6e',
    
        darkBack: '#262626',
        darkBorder: 'black',
        darkButtonBack: '#004f22',
        };

    const [value, setValue] = useState(0);
    
    return (
        <View style={{flex: 1, flexDirection: 'column'}} >
                <Text style = {{
                    fontSize: (2*settings.layoutSize), 
                    alignItems: 'center', 
                    color: (settings.darkMode ? 'white' : 'black')
                }}> 
                    {upType}s: {value}
                    </Text>
                <TouchableOpacity 
                    style={{alignItems: 'center',
                    backgroundColor: (settings.darkMode ? appColor.darkButtonBack : appColor.lightButtonBack),
                    padding: 10,
                    borderRadius: 50}}
                    onPress = {() => {setValue(value + 1), updateCount()}}
                >
                    <Text style = {{
                        fontSize: (2*settings.layoutSize), 
                        alignItems: 'center', 
                        color: (settings.darkMode ? 'white' : 'black')
                    }}>
                        {upType}
                    </Text>
                </TouchableOpacity>
        </View>
    )
}

export default UploadCount;
