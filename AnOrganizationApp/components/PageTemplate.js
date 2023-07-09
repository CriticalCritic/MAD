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
                flex: 1, 
                justifyContent: spacing,
                paddingTop: 30,
                paddingBottom: 20,
                backgroundColor: (settings.darkMode ? appColor.darkBack : appColor.lightBack),
            }} >
                {children}
        </SafeAreaView>
    )
}
export default PageTemplate;