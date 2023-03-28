import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "./pages/Game"
import HomeScreen from "./pages/Home"

 const Stack = createNativeStackNavigator();

 const Routes = () => {
    return (
        <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen name={'Home'} component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name={'Game'} component={GameScreen}/>
        </Stack.Navigator>
    )
 }

 export default Routes;