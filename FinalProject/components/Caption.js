import React,{useState,useEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

import { useSettings } from './SettingsContext';
import { useAppColor } from './AppColorContext';

const Caption = ({ item, images }) => {
    const {settings} = useSettings();
    const {appColor} = useAppColor();

    const buttonColor = (settings.darkMode ? appColor.darkButtonBack : appColor.lightButtonBack);
    const textColor = (settings.darkMode ? appColor.darkText : appColor.lightText);

    const [temp,setTemp] = useState(item.text);
    const [show,setShow] = useState((false));


    const update = () => {
        const ind = images.findIndex((elem) => elem===item);
        item.text=temp;
        setShow(false);
        {ind > -1 ? (
            images[ind].text = temp,
            storeData(images)
        ) : null}
    }

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('@AsyncImages', jsonValue);
          console.log('stored '+jsonValue);
        } catch (e) {
          console.log("error in storeData ");
          console.dir(e);
        }
    }

    return(
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-evenly'}}>
            <View style={{flex:(show ? 3 : 2)}}/>
            <TextInput style={{
                fontSize: (4*settings.layoutSize), 
                color: textColor,
                fontFamily: 'monospace',
                marginBottom: 10,
                marginRight: 20,
                marginLeft: 20,
                }}
                onChangeText={setTemp}
                onEndEditing={() => setShow(temp !== item.text)}
                value={temp}
                multiline
            />
            <View style={{flex:2}}/>

            {show ? 
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                    }}
                    onPress = {update}
                >
                    <Ionicons name={'checkbox'} size={5*settings.layoutSize} color={buttonColor} />
                </TouchableOpacity>
            : null}
        </View>
    );
}
export default Caption;