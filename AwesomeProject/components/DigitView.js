import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const DigitView = ({num,color}) => {
  return (
    <View style={{flex: 1, backgroundColor: color, alignItems: 'center', justifyContent: 'center'}} >
          <Text style = {{fontSize: 60}}>{num}</Text>
          </View>
  )
}
export default DigitView;