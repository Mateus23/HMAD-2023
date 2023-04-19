import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useSelector } from 'react-redux';

const MainNavigator = () => {
    const isLogged = Boolean(useSelector((state) => state.login.user))
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            {isLogged ? (
                <>
                    <Stack.Screen name="Home" component={Home} />
                </>
            ) :
            (
                <>
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                </>
            )}
        </Stack.Navigator>
    )
}

export default MainNavigator;