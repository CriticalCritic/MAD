/*
Basic Layout
A basic layout of buttons and text using flex boxes
Daniel Olevsky
*/

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Flex = () => {
  return (
    <View style={{flexDirection: 'column'}}>

      <View style={{flex: 1, backgroundColor: 'white', flexDirection:'row'}} >
        <View style={{flex: 1, backgroundColor: 'white'}}/>

        <View style={{flex: 30, backgroundColor: 'white', flexDirection:'column'}} >

        <View style={{flex: 1, backgroundColor: 'white'}}/>

          <View style={{flex: 20, backgroundColor: 'white', flexDirection:'row'}} >

            <View style={{flex: 5}}>
              <Button
                title="Blue Button"
                color="blue"
              />
            </View>

            <View style={{flex: 5}}>
              <Button
                title="Red Button"
                color="red"
              />
            </View>

            <View style={{flex: 5}}>
              <Button
                title="Green Button"
                color="green"
              />
            </View>

          </View>

          <View style={{flex: 100, backgroundColor: 'white', flexDirection:'column'}} >

            <View style={{flex: 30, backgroundColor: 'white'}}>
              <Text style={{fontSize:18, textAlign: 'center', fontWeight: 'bold'}}>
                Write the code for this screen
              </Text>
            </View>

            <View style={{flex: 10, backgroundColor: 'white', flexDirection:'column'}} >

              <View style={{flex: 5}}>
                  <Button
                    title="Blue Button"
                    color="blue"
                  />
                </View>

                <View style={{flex: 5}}>
                  <Button
                    title="Red Button"
                    color="red"
                  />
                </View>

                <View style={{flex: 5}}>
                  <Button
                    title="Green Button"
                    color="green"
                  />
                </View>

                <View style={{flex: 2, backgroundColor: 'white'}}/>
              </View>
            </View>

          
          </View>

        <View style={{flex: 1, backgroundColor: 'white'}}/>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;