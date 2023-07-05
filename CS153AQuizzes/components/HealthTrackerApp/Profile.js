import React, { useState } from 'react';
import {TouchableOpacity,Text,SafeAreaView} from 'react-native';

import {useValue} from './ValueContext'
import ProfileUpdate from './ProfileUpdate'

export default function Profile() {
    const {userStats,setStats} = useValue();

    const [tempStats,setTemp] = useState(userStats);

    const updateTemp = (stat, val) => {
        setTemp({...tempStats, [stat]: val});
    }

    return (
        <SafeAreaView style={{
            flex:1,
            }}>
            <Text style={{
                fontSize: 30,
                paddingLeft: 10,
            }}>
                currentValue = {JSON.stringify(userStats)}
            </Text>

            <ProfileUpdate stat='name' color='lightgreen' updateTemp={updateTemp} />

            <ProfileUpdate stat='age' color='lightblue' updateTemp={updateTemp} />

            <ProfileUpdate stat='weight' color='lightpink' updateTemp={updateTemp} />

            <ProfileUpdate stat='height' color='aqua' updateTemp={updateTemp} />

            <TouchableOpacity style={{
                backgroundColor:'cornflowerblue',
                alignItems:'center',
                justifyContent:'center',
                padding: 10,
                borderRadius: 5, 
            }}
            onPress={() => setStats(tempStats)}>
                <Text style={{
                    fontSize:30,
                    color:'white',
                }}>
                    SAVE PROFILE
                </Text>

            </TouchableOpacity>
        </SafeAreaView>
    );
}