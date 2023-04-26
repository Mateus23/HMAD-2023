import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './pages/MainNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

