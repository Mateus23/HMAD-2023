import { useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { getRandomSequence, sleep } from './utils'

const Game = ({ navigation }) => {
    const [sequence, setSequence] = useState([]);
    const [counter, setCounter] = useState(-1);
  
    const showSequence = (number) => {
        setCounter(number)
        return sleep(2000).then(() => {
            if (number < sequence.length - 1){
                showSequence(number + 1);
            }
            else {
                setCounter(-1)
            }
        })
    }

    return (
        <View style={styles.container}>
            <Text>
                Game
            </Text>
            <Text>
                {sequence.toString()}
            </Text>
            <Text>
                {counter >= 0 ? sequence[counter] : '#'}
            </Text>
            <Button title={'criar sequencia'} onPress={() => setSequence(getRandomSequence(5, sequence))}/>
            <Button title={'mostrar sequencia'} onPress={() => showSequence(0)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
    }
})

export default Game