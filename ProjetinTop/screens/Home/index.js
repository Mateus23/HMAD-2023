import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

const Home = ({navigation}) => {
    const [newName, setNewName] = useState('');

    const names = ['Jonathan', 'Lucas', 'James'];
    const surnames = ['Calleri', 'Moura', 'Rodriguez'];

    const goToAddNames = () => {
        navigation.navigate('AddNames')
    }

    const generateName = () => {
        const nameIndex = Math.floor(Math.random() * names.length);
        const surnameIndex = Math.floor(Math.random() * surnames.length);

        const name = names[nameIndex];
        const surname = surnames[surnameIndex];

        setNewName(`${name} ${surname}`)
    }
    
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
            <Text style={styles.title}>
                {newName ? 'O nome gerado foi:' : 'Gere um nome aleatório'}
            </Text>

            <Text style={styles.nameText}>
                {newName}
            </Text>

            <Button
                title={'Gerar Nome'}
                onPress={generateName}
            >
            </Button>

            <Button
                title={'Adicionar Nomes'}
                onPress={goToAddNames}
            >
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
    },
    nameText: {
        fontSize: 30,
        fontFamily: 'bold',
    },
})

export default Home;