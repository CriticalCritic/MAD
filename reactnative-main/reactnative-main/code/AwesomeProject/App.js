import React from 'react';
import {View,Text} from 'react-native';

import KeyPad from './components/StackDemo';
import DigitView from './components/StackDemo';

const App = () => {
    return (
        <View style={{flex:1}}>
            <Text style={{textAlign:'center',fontSize:40}}>StackDemo</Text>
            <KeyPad/>
            <DigitView/>
        </View>

    )
}
export default App
