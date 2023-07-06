import React from 'react';
import { View } from 'react-native';

const LineDesign = ({color, children}) => {
    return (
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{flex:1, backgroundColor: color, height: 3,}}/>
            <View style={{marginLeft: 15, marginRight: 15,}}>
                {children}
            </View>
            <View style={{flex:1, backgroundColor: color, height: 3,}}/>
        </View>
    )
}
export default LineDesign;