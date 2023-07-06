import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OrganizePage from './OrganizePage';
import UploadPage from './UploadPage';

const ElementPagesStack = createNativeStackNavigator();

function ElementPagesStackScreen() {
    return (
        <ElementPagesStack.Navigator screenOptions={{headerShown: false}}>
            <ElementPagesStack.Screen name="OrganizePage" component={OrganizePage} />
            <ElementPagesStack.Screen name="Upload" component={UploadPage} />
        </ElementPagesStack.Navigator>
    );
}
export default ElementPagesStackScreen;