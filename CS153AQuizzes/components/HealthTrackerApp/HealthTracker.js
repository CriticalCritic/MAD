import React from "react";
import {View} from 'react-native';

import ValueProvider from './ValueContext';
import StackMain from './StackMain'

const App = () => {

  return (
    <ValueProvider value={{
      name:'none', 
      age:0, 
      weight:0, 
      height:0}}>
        <View style={{flex:1}}>
          <StackMain />
        </View>
    </ValueProvider>
  )
}

export default App