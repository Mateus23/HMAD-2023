import { useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase-api';


const SignInScreen = ({ navigation }) => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <TextInput
          onChangeText={setLoginEmail}
          value={loginEmail}
          placeholder="email"
        />
        <TextInput
          onChangeText={setLoginPassword}
          value={loginPassword}
          placeholder="password"
        />
        <Button
          title="Submit"
          onPress={() => signInWithEmailAndPassword(auth, loginEmail, loginPassword)}
        />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    );
  }

export default SignInScreen;