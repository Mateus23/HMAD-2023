import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchTab from './Tabs/SearchTab';

const Tab = createBottomTabNavigator();

const TabGroup = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen name="SearchTab" component={SearchTab} />
        </Tab.Navigator>
    )
}

export default TabGroup;