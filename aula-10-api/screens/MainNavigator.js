import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActivityList from './ActivityList';
import ActivityIdea from './ActivityIdea';
import Home from './Home';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ActivityList" component={ActivityList} />
            <Stack.Screen name="ActivityIdea" component={ActivityIdea} />
        </Stack.Navigator>
    )
}

export default MainNavigator;