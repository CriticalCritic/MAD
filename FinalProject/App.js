import React from 'react';
import {View,Text} from 'react-native';

import Settings from './components/Settings';
import Upload from './components/Upload';
import StackMain from './components/StackMain';

const App = () => {
  return (
    <View style={{flex:1}}>
        <StackMain/>
    </View>
  );
}
export default App