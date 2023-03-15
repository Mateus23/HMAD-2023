import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './Search';
import Home from './Home';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    )
}

export default MainNavigator;