import React,{useEffect, useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

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

  const buttonColor = (settings.darkMode ? appColor.darkButtonBack : appColor.lightButtonBack);
  const textColor = (settings.darkMode ? 'white' : 'black');

  const [selectedImage,setSelectedImage] = useState();
  const [textPair,setTextPair] = useState();

  useEffect(() => {pickImageAsync()},[]);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@AsyncImages', jsonValue);
      console.log('stored '+jsonValue);
    } catch (e) {
      console.log("error in storeData ");
      console.dir(e);
    }
}

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <PageTemplate spacing='space-between'>
        <StatusBar style="auto" />
        <LineDesign color={textColor}>
            <Text style = {{
                fontSize: (4*settings.layoutSize), 
                textAlign: 'center', 
                fontWeight: 'bold',
                fontFamily: 'notoserif', 
                color: textColor
                }}>
                Upload Elements
            </Text>
        </LineDesign>

        <Text style = {{
            fontSize: (3*settings.layoutSize), 
            textAlign: 'center', 
            color: textColor
            }}>
            Total Upload Count: {images.length}
        </Text>

        {selectedImage == null ? null :
            <TextInput 
            style={{
                fontSize: (3*settings.layoutSize), 
                textAlign: 'center', 
                color: textColor,
                borderColor: textColor,
                borderWidth: 3,
            }}
            onChangeText={setTextPair}
            placeholder="Enter original thought"
            />
        }

        <View style={{alignItems:'center'}}>
            <ImageViewer placeHolder={PlaceholderImage} selectedImage={selectedImage} />
        </View>

        {selectedImage == null ? null :
            <TouchableOpacity
                style={{alignItems: 'center',
                backgroundColor: buttonColor,
                padding: 10,
                borderRadius: 50,
            }}
                onPress = {() => (
                    setImages([[selectedImage, textPair], ...images, ]), 
                    storeData([[selectedImage, textPair], ...images, ]), 
                    navigation.navigate('OrganizePage')
                )}
            >
                <Text style={{
                    color: textColor,
                    fontSize: (3*settings.layoutSize),
                }}>
                    Confirm Image
                </Text>
            </TouchableOpacity>
        }
        

        <TouchableOpacity
            style={{alignItems: 'center',
            backgroundColor: buttonColor,
            padding: 10,
            borderRadius: 50,
        }}
            onPress = {pickImageAsync}
        >
            <Text style={{
                color: textColor,
                fontSize: (3*settings.layoutSize),
            }}>
                {selectedImage == null ? "Upload Image" : "Rechoose Image"}
            </Text>
        </TouchableOpacity>
    </PageTemplate>
  )
}
export default App;