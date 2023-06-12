import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DigitView from './components/DigitView';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'violet', flexDirection: 'row'}} >
        <DigitView num = "1" color="red"/>
        <DigitView num = "2" color="green"/>
        <DigitView num = "3" color="blue"/>
      </View>

      <View style={{flex: 1, backgroundColor: 'violet', flexDirection: 'row'}} >
        <DigitView num = "4" color="red"/>
        <DigitView num = "5" color="green"/>
        <DigitView num = "6" color="blue"/>
      </View>

      <View style={{flex: 1, backgroundColor: 'violet', flexDirection: 'row'}} >
        <DigitView num = "1" color="red"/>
        <DigitView num = "2" color="green"/>
        <DigitView num = "3" color="blue"/>
      </View>

      <View style={{flex: 1, backgroundColor: 'violet', flexDirection: 'row'}} >
        <DigitView num = "1" color="red"/>
        <DigitView num = "2" color="green"/>
        <DigitView num = "3" color="blue"/>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
});

export default Flex;