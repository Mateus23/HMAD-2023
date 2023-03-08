import { Button, View, Text, StyleSheet } from 'react-native';

const TabHeader = ({route, navigation}) => {
    return (
        <View style={Style.headerContainer}>
            <Button title={"Home"} color={'#66d'} onPress={() => navigation.navigate('Home')}/>
            <Text style={Style.headerTitle}>
                {`${route.name}`}
            </Text>
            <Button title={"Profile"} color={'#66d'} onPress={() => navigation.navigate('Profile')}/>
        </View>
    )
}

const Style = StyleSheet.create({
    headerContainer: {
        padding: 20,
        backgroundColor: '#ddd',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#777',
    }
})

export default TabHeader;