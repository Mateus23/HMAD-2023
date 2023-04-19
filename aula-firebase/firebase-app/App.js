import * as React from 'react'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './screens/MainNavigator';
import FirebaseContainer from './firebase/container';
import store from './reducers/store'

export default function App() {

  return (
    <Provider store={store}>
      <FirebaseContainer>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </FirebaseContainer>
    </Provider>
  );
}