import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setAge } from '../../reducers/userSlice'

const PreferencesScreen = () => {
    const { name, age } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const userName = name || 'amigo';
    const noAgeTitle = `Olá, ${userName}, qual sua idade?`;
    const ageTitle = 'Nossa, como você é velho';

    return (
      <View style={ styles.container }>
        <Text style={styles.title} >{age ? ageTitle : noAgeTitle}</Text>
        <View style={ styles.buttonContainer }>
          <Button
            title="0-18"
            onPress={() => dispatch(setAge({age: '0-18'}))}
          />
          <Button
            title="18-60"
            onPress={() => dispatch(setAge({age: '18-60'}))}
          />
          <Button
            title="60+"
            onPress={() => dispatch(setAge({age: '60+'}))}
          />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    title: {
      fontSize: 25,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      alignContent: 'space-around',
    },
    buttonContainer: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: '100%'
    }
  });

export default PreferencesScreen;