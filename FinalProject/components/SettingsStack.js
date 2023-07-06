import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Settings from './Settings';
import ResetPage from './ResetPage';

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator screenOptions={{headerShown: false}}>
            <SettingsStack.Screen name="SettingsPage" component={Settings} />
            <SettingsStack.Screen name="Reset" component={ResetPage} />
        </SettingsStack.Navigator>
    );
}
export default SettingsStackScreen;