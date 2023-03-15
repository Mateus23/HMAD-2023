import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Button
          title="Pokedex"
          onPress={() => navigation.navigate('Pokedex')}
        />
        <Button
          title="Search"
          onPress={() => navigation.navigate('Search')}
        />
      </View>
    );
  }

export default HomeScreen;