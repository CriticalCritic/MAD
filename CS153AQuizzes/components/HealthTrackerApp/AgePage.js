import React from 'react';
import {Text,View,SafeAreaView} from 'react-native';

import {useValue} from './ValueContext'

export default function AgePage() {
    const {userStats} = useValue();

    return (
        <SafeAreaView style={{
            flex:1,
            }}>
            <Text style={{
                fontSize: 30,
                paddingLeft: 10,
            }}>
                Age Calculator {"\n"}
                age in years: {userStats.age} {"\n"}
                age in weeks: {userStats.age*52} {"\n"}
                age in days: {userStats.age*365.25} {"\n"}
            </Text>
            
            <View style={{flex:9}}/>
        </SafeAreaView>
    );
}