import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setColor } from '../../reducers/preferencesSlice'

const PreferencesScreen = () => {
    const color = useSelector(state => state.preferences.color);
    const name = useSelector(state => state.user.name);
    const dispatch = useDispatch();

    const userName = name || 'amigo';
    const title = `Olá, ${userName}, escolha uma cor`;

    return (
      <View style={{ ...styles.container, backgroundColor: color }}>
        <Text style={styles.title} >{title}</Text>
        <View style={{ ...styles.buttonContainer, backgroundColor: color }}>
          <Button
            title="Branco"
            onPress={() => dispatch(setColor('#fff'))}
          />
          <Button
            title="Azul"
            onPress={() => dispatch(setColor('#ccf'))}
          />
          <Button
            title="Verde"
            onPress={() => dispatch(setColor('#cfc'))}
          />
          <Button
            title="Vermelho"
            onPress={() => dispatch(setColor('#fcc'))}
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