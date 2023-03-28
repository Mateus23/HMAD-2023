import { View, StyleSheet, Button, Text, Image } from "react-native"

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                DAMAS!!!!!
            </Text>
            <Image
                style={styles.image}
                source={'https://super.abril.com.br/wp-content/uploads/2018/07/55de0cc80e21632c150004b5thinkstockphotos-167232497.jpeg'}
            />
            <Button title={'Jogo 2P'} onPress={() => navigation.navigate('Game')} />
            <Button disabled title={'Jogo Online'} onPress={() => console.log('num tem ainda')} />
            <Button disabled title={'Jogo vs Máquina'} onPress={() => console.log('num tem ainda')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    image: {
        height: 200,
        width: 300,
    }
  });

export default Home;