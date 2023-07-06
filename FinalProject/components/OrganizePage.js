import React,{useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useSettings } from './SettingsContext';
import { useAppColor } from './AppColorContext';
import { useImages } from './ImagesContext';

import PageTemplate from './PageTemplate';
import LineDesign from './LineDesign';
import ImageViewer from './ImageViewer';

const PlaceholderImage = require('../assets/adaptive-icon.png');

const App = ({navigation}) => {

  const {settings} = useSettings();
  const {appColor} = useAppColor();
  const {images,setImages} = useImages();

  const textColor = (settings.darkMode ? 'white' : 'black');

  useEffect(() => {getImagesData()},[]);

  const getImagesData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@AsyncImages')
      let data = null
      if (jsonValue!=null) {
      data = JSON.parse(jsonValue)
      setImages(data);
      console.log('set data Images', data);
    } else {          
      // this happens the first time the app is loaded
      console.log('read null value from Storage for Images');
      setImages([]);
    };
    } catch(e) {
      console.log("error in getData");
      console.dir(e);
    };
  };

  return (
    <PageTemplate spacing='space-between'>
      <StatusBar style="auto" />
      <LineDesign color={textColor}>
        <Text style = {{
          fontSize: (4*settings.layoutSize), 
          textAlign:'center',
          fontWeight: 'bold',
          fontFamily: 'notoserif', 
          color: textColor,
          }}>
            Organize Elements
        </Text>
      </LineDesign>
      
      {images.length == 0 ? 
      <Text style={{
          fontSize: (4*settings.layoutSize), 
          color: textColor,
          margin: 10,
          textAlign: 'center',
      }}>
        Press 
        <Text style = {{color:(settings.darkMode ? appColor.lightButtonBack : appColor.darkButtonBack), fontWeight:'bold'}}>
          {" Upload "}
        </Text> 
        to start
      </Text> 
      :
      <FlatList 
        data={images}
        renderItem={({ item }) => (
          <View style={{
            alignItems:'center',
            margin:15,
            borderColor:textColor,
            borderWidth:3,
          }}>
            <ImageViewer placeHolder={PlaceholderImage} selectedImage={item[0]} />

            {item[1] === null ? null :
            <Text style={{
              fontSize: (4*settings.layoutSize), 
              color: textColor,
              fontFamily: 'monospace',
              margin: 10,
            }}>
              {item[1]}
            </Text>
            }
          </View>
        )}
        keyExtractor={({ id },index) => index}
      />
      }

      <TouchableOpacity
          style={{alignItems: 'center',
          backgroundColor: (settings.darkMode ? appColor.darkButtonBack : appColor.lightButtonBack),
          padding: 10,
          borderRadius: 50,
      }}
          onPress = {() => (navigation.navigate('Upload'))}
      >
          <Text style={{
              color: (settings.darkMode ? 'white' : 'black'),
              fontSize: (3*settings.layoutSize),
          }}>
              Upload
          </Text>
      </TouchableOpacity>
    </PageTemplate>
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