import React,{useState} from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const App = () => {
    const [displaySize,setDisplaySize] = useState(10);
    const [darkMode, setDarkMode] = useState(false);

    return (
      <View
        style={{
        flex: 1, 
        justifyContent: 'center',
        margin:20,
        padding:20,
        backgroundColor: 'lightgray',
    }} >
            <View style={{alignItems: 'center'}}>
                <Text style = {{fontSize: 40}}>
                    App Settings
                </Text>

                <View style={{flex: 1}} />

                <Text style = {{fontSize: 30}}>
                    Change Display Size: {displaySize}
                </Text>
            </View>

            <View style={{flex: 4}} />
            
            <View style={{flex: 5, flexDirection: 'row'}} >
                <View style={{flex: 1}} />
                <View style={{flex: 1, flexDirection: 'column'}} >
                    <Button
                        title="Small"
                        onPress = {() => {setDisplaySize(5)}}
                    />
                </View>
                <View style={{flex: 1}} />
                <View style={{flex: 1, flexDirection: 'column'}} >
                    <Button
                        title="Medium"
                        onPress = {() => {setDisplaySize(10)}}
                    />
                </View>
                <View style={{flex: 1}} />
                <View style={{flex: 1, flexDirection: 'column'}} >
                    <Button
                        title="Large"
                        onPress = {() => {setDisplaySize(15)}}
                    />
                </View>
                <View style={{flex: 1}} />
            </View>
            <View style={{flex: 2}} />

            <View style={{flex: 10, flexDirection: 'column'}} >
                <View style={{alignItems: 'center'}}>
                    <Text style = {{fontSize: 30}}>
                        Change Dark Mode: {darkMode}
                    </Text>
                </View>

                <View style={{flex: 1}} />

                <View style={{flex: 5, flexDirection: 'row'}}>
                    <View style={{flex: 1}} />
                    <View style={{flex: 5, flexDirection: 'column'}}>
                        <View style={{flex: 2}} />
                        <Button
                            title="Switch"
                            onPress = {() => {setDarkMode(!darkMode)}}
                        />
                        <View style={{flex: 2}} />
                    </View>
                    <View style={{flex: 1}} />
                </View>
            </View>
      </View>
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