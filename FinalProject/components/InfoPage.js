import React,{useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Brightness from 'expo-brightness';

import { useSettings } from './SettingsContext';
import { useAppColor}  from './AppColorContext';

import PageTemplate from './PageTemplate';
import LineDesign from './LineDesign';

const App = () => {
  const {settings} = useSettings();
  const {appColor} = useAppColor();

  const textColor = (settings.darkMode ? 'white' : 'black');

  // blinds anyone not using darkmode by turning the screen brightness to maximum
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
        (settings.darkMode ? Brightness.setSystemBrightnessAsync(0.25) : Brightness.setSystemBrightnessAsync(1))
      }
      })();
    }, []);
    
    return (
      <PageTemplate spacing='space-between'>
        <StatusBar style="auto" />
        <LineDesign color={textColor}>
          <Text style = {[
            styles.bigText, {
              fontSize: (4*settings.layoutSize), 
              color: textColor,
            }]}>
              An Organization App
          </Text>
        </LineDesign>

        <View style={{
          flex:1, 
          justifyContent:'center', 
          borderColor: textColor, 
          borderWidth: 3, 
          margin: 15,
        }}>
          <Text style = {[
            styles.text, {
              fontSize: (4*settings.layoutSize), 
              color: textColor,
              margin: 15,
            }]}>
              To organize ideas {'\n'}
              through text, images, and audio for free
          </Text>

          <Text style = {[
            styles.text, {
              fontSize: (4*settings.layoutSize), 
              color: textColor,
              margin: 15,
            }]}> 
              Navigate to the {'\n'}
              <Text style = {{color:(settings.darkMode ? appColor.lightButtonBack : appColor.darkButtonBack), fontWeight:'bold'}}>
                {" Organize "}
              </Text> 
              tab to begin uploading 
          </Text>
        </View>

        <LineDesign color={textColor}>
          <Text style = {[
            styles.bigText, {
              fontSize: (4*settings.layoutSize), 
              color: textColor,
            }]}>
              By: Daniel Olevsky
          </Text>
        </LineDesign>
      </PageTemplate>
    )
  }
export default App;

const styles = StyleSheet.create({
    bigText: {
      textAlign:'center',
      fontWeight: 'bold',
      fontFamily: 'notoserif',
    },
    text: {
      textAlign:'center',
      fontFamily: 'normal',
    },
});