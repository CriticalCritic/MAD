/*
Distance Calculator
Calculate the distance from the origin to an entered three dimensional point
Daniel Olevsky
*/

import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [num1, onChangeNum1] = useState('0');
  const [num2, onChangeNum2] = useState('0');
  const [num3, onChangeNum3] = useState('0');

  const [numF1, onChangeNumF1] = useState('0');
  const [numF2, onChangeNumF2] = useState('0');
  const [numF3, onChangeNumF3] = useState('0');

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={{fontWeight: 'bold', fontSize: 40}}>Distance of (x,y,z) from (0,0,0)</Text>
        <Text style={{fontSize: 30}}>Write the code for this app which calculates</Text>
        <Text style={{fontSize: 30}}>d = Math.sqrt(x*x+y*y+z*z)</Text>
        
        <TextInput
            onChangeText={onChangeNum1}
            placeholder="Enter Digit 1"
            style={{fontSize: 30,height: 30}}
        />   
        <TextInput
            onChangeText={onChangeNum2}
            placeholder="Enter Digit 2"
            style={{fontSize: 30,height: 30}}
        />   
        <TextInput
            onChangeText={onChangeNum3}
            placeholder="Enter Digit 3"
            style={{fontSize: 30,height: 30}}
        />   
        <View style={{flexDirection: 'row'}}>
          <Button
            title='CALCULATE DISTANCE'
            onPress={() => (onChangeNumF1(num1), onChangeNumF2(num2), onChangeNumF3(num3))}
          />
          <View/>
        </View>
        <Text style={{fontSize: 30}}>distance to ({numF1},{numF2},{numF3}) is d = {Math.sqrt(numF1*numF1+numF2*numF2+numF3*numF3)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
  },
});
