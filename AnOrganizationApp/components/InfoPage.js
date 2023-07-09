import React,{useEffect} from 'react';
import { StyleSheet, View, Text, Touchable, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useSettings } from './SettingsContext';
import { useAppColor}  from './AppColorContext';

import PageTemplate from './PageTemplate';
import LineDesign from './LineDesign';

const App = () => {
  const {settings} = useSettings();
  const {appColor} = useAppColor();

  const textColor = (settings.darkMode ? appColor.darkText : appColor.lightText);
    
    return (
      <PageTemplate spacing='space-between'>
        <StatusBar style="auto" barStyle={{color: textColor}} />
        <LineDesign color={textColor}>
          <Text style = {[
            styles.bigText, {
              fontSize: (30), 
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
              fontSize: (30), 
              color: textColor,
              margin: 15,
            }]}>
              To organize ideas {'\n'}
              through text, images, and audio for free
          </Text>

          <Text style = {[
            styles.text, {
              fontSize: (30), 
              color: textColor,
              margin: 15,
            }]}> 
              Navigate to the {'\n'}
              <Text style = {{color: appColor.highlight, fontWeight:'bold'}}>
                {" Organize "}
              </Text> 
              tab to begin uploading 
          </Text>

        </View>

        <LineDesign color={textColor}>
          <Text style = {[
            styles.bigText, {
              fontSize: (30), 
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