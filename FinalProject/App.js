import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SettingsContext from './components/SettingsContext';
import ColorProvider from './components/AppColorContext';

import StackMain from './components/StackMain';
import ImagesContext from './components/ImagesContext';

const App = () => {
  const [settings,setSettings] = useState({});
  const [images,setImages] = useState([]);

  // this loads in the data after the app has been rendered
  useEffect(() => {getSettingsData()},[]);

  const getSettingsData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@AsyncSettings')
        let data = null
        if (jsonValue!=null) {
        data = JSON.parse(jsonValue)
        setSettings(data);
        console.log('set data Settings', data);
      } else {          
        // this happens the first time the app is loaded
        console.log('read null value from Storage for Settings');
        setSettings({darkMode:false, layoutSize:10});
      };
      } catch(e) {
        console.log("error in getData");
        console.dir(e);
      };
  };
  
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

        lightTab: 'gray',
        darkTab: 'white'
      }}>
        <ImagesContext.Provider 
            value={{images,setImages}}>
          <StackMain/>
        </ImagesContext.Provider>
      </ColorProvider>
    </SettingsContext.Provider>
  );
}
export default App