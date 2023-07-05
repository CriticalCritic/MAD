import React from 'react';
import {Text,View,SafeAreaView} from 'react-native';

import {useValue} from './ValueContext'

export default function BMIPage() {
    const {userStats} = useValue();

    return (
        <SafeAreaView style={{
            flex:1,
            }}>
            <Text style={{
                fontSize: 30,
                paddingLeft: 10,
            }}>
                BMI Calculator {"\n"}
                height: {userStats.height} {"\n"}
                weight: {userStats.weight} {"\n"}
                bmi: {userStats.weight/(userStats.height*userStats.height)*703} {"\n"}
            </Text>
            
            <View style={{flex:9}}/>
        </SafeAreaView>
    );
}