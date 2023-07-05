import React from 'react';
import {Text,View,TextInput} from 'react-native';
import {useValue} from './ValueContext';

const ProfileUpdate = ({ stat, color, updateTemp }) => {
    const {userStats} = useValue();

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            padding: 40,
        }}>
            <Text style={{fontSize: 30}}>
                {stat} 
            </Text>
            <View/>
            <TextInput
                style={{backgroundColor:color, fontSize: 30}}
                onChangeText={temp => updateTemp(stat, temp)}
                placeholder={userStats[stat]}
            >
            </TextInput>
        </View>
    )
}
export default ProfileUpdate;