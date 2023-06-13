import React,{useState} from 'react';
import {View,Text,Button} from 'react-native';

const UploadCount = ({upType}) => {
    const [value, setValue] = useState(0);
    return (
        <View style={{flex: 1, flexDirection: 'column'}} >
                <Text style = {{fontSize: 20, alignItems: 'center'}}> {upType}s: {value}</Text>
                <Button 
                    title = {upType}
                    onPress = {() => setValue(value + 1)}
                />
        </View>
    )
}

export default UploadCount;
