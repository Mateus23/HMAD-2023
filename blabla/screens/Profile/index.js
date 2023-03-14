import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { set, reset } from '../../reducers/userSlice'

const ProfileScreen = ({ navigation }) => {
    const name = useSelector(state => state.user.name);
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = React.useState('');

    const title = name ? `Olá ${name}` : 'Olá amigo, qual seu nome?'
    const buttonTitle = name ? "reset" : "submit";

    const buttonOnPress = () => {
      if (name) {
        dispatch(reset());
      } else {
        dispatch(set(nameInput));
      }
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Text >{title}</Text>
        {!name && <TextInput 
          value={nameInput}
          onChangeText={setNameInput}
          style={styles.input}
        />}
        <Button 
          title={buttonTitle}
          onPress={buttonOnPress}
        />
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default ProfileScreen;