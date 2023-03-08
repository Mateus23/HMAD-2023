import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabGroup from './TabGroup';
import Details from './Details';
import Home from './Home';
import Profile from './Profile';
import HeaderTitle from '../components/HeaderTitle';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen 
                name="Details" component={Details} 
                options={({ route }) => ({
                    headerTitle: () => <HeaderTitle route={route} />,
                })}

            />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="TabGroup" component={TabGroup} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default MainNavigator;