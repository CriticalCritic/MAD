import React,{useState} from 'react';
import {View, Button, Text} from 'react-native';

const App = () => {
    const [change,setChange] = useState(0);
    const [coinNum, setCoinNum] = useState(0);
    return (
      <View>
            <Text style = {{fontSize: 40}}>
                U.S. Change Counter
            </Text>
            <Text style = {{fontSize: 20}}>
                Change: {change} Coins: {coinNum} 
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}} >
                <Button
                    title="Pennies"
                    onPress = {() => {setChange(change+1); setCoinNum(coinNum+1)}}
                />
                <Button
                    title="Nickels"
                    onPress = {() => {setChange(change+5); setCoinNum(coinNum+1)}}
                />
                <Button
                    title="Dimes"
                    onPress = {() => {setChange(change+10); setCoinNum(coinNum+1)}}
                />
                <Button
                    title="Quarters"
                    onPress = {() => {setChange(change+25); setCoinNum(coinNum+1)}}
                />
                <Button
                    title="Half Dollars"
                    onPress = {() => {setChange(change+50); setCoinNum(coinNum+1)}}
                />
            </View>
      </View>
    )
  }


export default App;