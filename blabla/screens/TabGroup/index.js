import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabHeader from '../../components/TabHeader/TabHeader';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';

const Tab = createBottomTabNavigator();

const TabGroup = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: true, header: TabHeader }}>
            <Tab.Screen name="Tab1" component={Tab1} />
            <Tab.Screen name="Tab2" component={Tab2} />
            <Tab.Screen name="Tab3" component={Tab3} />
        </Tab.Navigator>
    )
}

export default TabGroup;