import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SettingsContext from './components/SettingsContext';
import ColorProvider from './components/AppColorContext';

import StackMain from './components/StackMain';

const App = () => {
  const [settings,setSettings] = useState({});

  // this loads in the data after the app has been rendered
  useEffect(() => {getData()},[])

  const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@AsyncSettings')
        let data = null
        if (jsonValue!=null) {
          data = JSON.parse(jsonValue)
          setSettings(data)
          console.log('set data', data)
        } else {
          console.log('read null value from Storage')
          // this happens the first time the app is loaded
          setSettings({darkMode:false, layoutSize:10})
        }
      } catch(e) {
        console.log("error in getData ")
        console.dir(e)
        // error reading value
      }
  }
  
  return (
    <SettingsContext.Provider
        value={{settings,setSettings}} >
      <ColorProvider value={{
        lightBack: '#f2f2f2', 
        lightBorder: '#dedede',
        lightButtonBack: '#00ff6e',
    
        darkBack: '#262626',
        darkBorder: 'black',
        darkButtonBack: '#004f22',
      }}>
        <StackMain/>
      </ColorProvider>
    </SettingsContext.Provider>
  );
}
export default App