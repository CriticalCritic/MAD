import React,{useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Brightness from 'expo-brightness';
//import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useSettings } from './SettingsContext';
import { useAppColor } from './AppColorContext';
import { useImages } from './ImagesContext';

import PageTemplate from './PageTemplate';
import LineDesign from './LineDesign';
import ImageViewer from './ImageViewer';
import Caption from './Caption'

const PlaceholderImage = require('../assets/adaptive-icon.png');

const App = ({navigation}) => {

  const {settings} = useSettings();
  const {appColor} = useAppColor();
  const {images,setImages} = useImages();

  const textColor = (settings.darkMode ? appColor.darkText : appColor.lightText);

  useEffect(() => {getImagesData()},[]);
  // blinds anyone not using darkmode by turning the screen brightness to maximum
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
        (settings.darkMode ? Brightness.setSystemBrightnessAsync(0.25) : Brightness.setSystemBrightnessAsync(1))
      }
      })();
    }, []);

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
      <StatusBar style="auto" barStyle={{color: textColor}} />
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
        <Text style = {{color: appColor.highlight, fontWeight:'bold'}}>
          {" Upload "}
        </Text> 
        to start
      </Text> 
      :
      <FlatList 
        style={{marginTop: 10, marginBottom: 10}}
        data={images}
        renderItem={({ item }) => (
          <View style={{
            alignItems:'center',
            margin:15,
            borderColor:textColor,
            borderWidth:3,
          }}>
            <TouchableOpacity
              onPress={() => {navigation.navigate('Upload', {item: item, edit: true});}}
            >
              <ImageViewer placeHolder={PlaceholderImage} selectedImage={item.image} />
            </TouchableOpacity>

            {item.text != null ? <Caption item={item} images={images} /> : null}
          </View>
        )}
        keyExtractor={item => item.image}
      />
      }

      <TouchableOpacity
          style={{alignItems: 'center',
          backgroundColor: (settings.darkMode ? appColor.darkButtonBack : appColor.lightButtonBack),
          padding: 10,
          borderRadius: 50,
          marginRight: 15,
          marginLeft: 15,
      }}
          onPress = {() => (navigation.navigate('Upload', {edit: false}))}
      >
          <Text style={{
              color: (textColor),
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