import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import AddNames from './AddNames';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddNames" component={AddNames} />
        </Stack.Navigator>
    )
}

export default MainNavigator;