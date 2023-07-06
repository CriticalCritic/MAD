import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import {useSettings} from './SettingsContext';
import {useAppColor} from './AppColorContext';

const PageTemplate = ({spacing, children}) => {
    const {settings} = useSettings();
    const {appColor} = useAppColor();
    
    return (
        <SafeAreaView 
        style={{
            backgroundColor: (settings.darkMode ? appColor.darkBorder : appColor.lightBorder), 
            flex:1
        }}>
            <View
                style={{
                flex: 1, 
                justifyContent: spacing,
                margin:20,
                padding:20,
                backgroundColor: (settings.darkMode ? appColor.darkBack : appColor.lightBack),
            }} >
                {children}
            </View>
        </SafeAreaView>
    )
}
export default PageTemplate;