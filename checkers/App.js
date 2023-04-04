import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './reducers/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
