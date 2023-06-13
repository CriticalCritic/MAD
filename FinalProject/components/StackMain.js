import * as React from 'react';
import {Button,Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './About';
import Settings from './Settings';
import Upload from './Upload';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
        <View 
        style={{
            flex: 1, 
            flexDirection: 'row', 
            backgroundColor: 'lightgray',
            margin:20,
            padding:20,
            }}>

            <View style={{flex: 2}} />

            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 2}} />
                <Button
                    title="About"
                    onPress={() =>
                    navigation.navigate('About')
                    }
                />
                <View style={{flex: 2}} />
                <Button
                    title="Settings"
                    onPress={() =>
                    navigation.navigate('Settings') 
                    }
                />
                <View style={{flex: 2}} />
                <Button
                    title="Upload"
                    onPress={() =>
                    navigation.navigate('Upload') 
                    }
                />
                <View style={{flex: 2}} />
        </View>
        <View style={{flex: 2}} />
      </View>
    );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Organization Home'}} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Upload" component={Upload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
