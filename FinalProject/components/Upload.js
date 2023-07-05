import React,{useState} from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

import {useSettings} from './SettingsContext';
import {useAppColor} from './AppColorContext';

import UploadCount from './UploadCount';

const App = () => {
  const {settings} = useSettings();
  const {appColor} = useAppColor();

  const [uploadCount,setUploadCount] = useState(0);

  const updateCount = () => {
      setUploadCount(uploadCount+1);
  };

  return (
    <SafeAreaView 
    style={{
      backgroundColor: (settings.darkMode ? appColor.darkBorder : appColor.lightBorder), 
      justifyContent: 'center', 
      flex:1
      }}>
      <View
        style={{
            flex: 1, 
            justifyContent: 'center',
            margin:20,
            padding:20,
            backgroundColor: (settings.darkMode ? appColor.darkBack : appColor.lightBack),
        }} >
            <View style={{alignItems: 'center'}}>
                <Text style = {{
                  fontSize: (4*settings.layoutSize), 
                  alignItems: 'center', 
                  color: (settings.darkMode ? 'white' : 'black')
                  }}>
                    Upload Elements
                </Text>

                <View style={{flex: 2}} />

                <Text style = {{
                  fontSize: (3*settings.layoutSize), 
                  alignItems: 'center', 
                  color: (settings.darkMode ? 'white' : 'black')
                  }}>
                    Total Upload Count: {uploadCount}
                </Text>
            </View>
            <View style={{flex: 5}} />

            <View style={{flex: 10, flexDirection: 'row'}} >
                <View style={{flex: 1}} />
                <UploadCount upType = "Text" updateCount={updateCount} />
                <View style={{flex: 1}} updateCount={updateCount} />
                <UploadCount upType = "Image" updateCount={updateCount} />
                <View style={{flex: 1}} />
                <UploadCount upType = "Audio" updateCount={updateCount} />
                <View style={{flex: 1}} />
            </View>
      </View>
    </SafeAreaView>
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