import React,{useState} from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

import UploadCount from './UploadCount';

const App = () => {
    const [uploadCount,setUploadCount] = useState(0);

    return (
      <View
        style={{
            flex: 1, 
            justifyContent: 'center',
            margin:20,
            padding:20,
            backgroundColor: 'lightgray'
        }} >
            <View style={{alignItems: 'center'}}>
                <Text style = {{fontSize: 40, alignItems: 'center'}}>
                    Upload Elements
                </Text>

                <View style={{flex: 2}} />

                <Text style = {{fontSize: 30, alignItems: 'center'}}>
                    Total Upload Count: {uploadCount}
                </Text>
            </View>
            <View style={{flex: 5}} />

            <View style={{flex: 10, flexDirection: 'row'}} >
                <View style={{flex: 1}} />
                <UploadCount upType = "Text" />
                <View style={{flex: 1}} />
                <UploadCount upType = "Image" />
                <View style={{flex: 1}} />
                <UploadCount upType = "Audio" />
                <View style={{flex: 1}} />
            </View>
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