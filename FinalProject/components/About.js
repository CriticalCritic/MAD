import React,{useState} from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const App = () => {

    return (
      <View
        style={{
            flex: 1, 
            justifyContent: 'center',
            margin:20,
            padding:20,
            backgroundColor: 'lightgray'
        }} >
            <View style={{alignItems: 'center', flexDirection: 'column'}}>
                <Text style = {{fontSize: 40, alignItems: 'center'}}>
                    About Organization App
                </Text>

                <View style={{flex: 3}} />

                <Text style = {{fontSize: 30, alignItems: 'center'}}>
                    By: Daniel Olevsky
                </Text>

                <View style={{flex: 3}} />

                <Text style = {{fontSize: 20, alignItems: 'center'}}>
                    An app to organize text, images, and audio for free
                </Text>
            </View>
            <View style={{flex: 5}} />
      </View>
    )
  }


export default App;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });