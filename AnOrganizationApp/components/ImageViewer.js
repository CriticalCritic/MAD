import { StyleSheet, Image } from 'react-native';

import { useSettings } from './SettingsContext';

export default function ImageViewer({ placeHolder, selectedImage }) {
  const {settings} = useSettings();

  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : placeHolder;

  return <Image source={imageSource} style={[styles.image, {width: 25*settings.layoutSize, height: 25*settings.layoutSize}]} />;
}

const styles = StyleSheet.create({  
  image: {
    borderRadius: 18,
    resizeMode: 'cover',
    margin: 15,
  },
});
