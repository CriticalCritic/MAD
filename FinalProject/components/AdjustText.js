import { useContext } from 'react';
import { Text } from 'react-native';


import { settingsContext } from './SettingsContext.js';

export default function AdjustText({ children }) {
    const settings = useContext(settingsContext);

    return (
        <Text style={{fontSize: (settings.displaySize)}}>
        </Text>
    );
}
