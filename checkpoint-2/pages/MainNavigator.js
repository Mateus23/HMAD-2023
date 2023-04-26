import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'
import Game from './Game'

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Game} />
        </Stack.Navigator>
    );
  }

export default MainNavigator;