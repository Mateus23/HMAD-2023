import { View, Text } from 'react-native';

const PokedexScreen = ({ id }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Text>{"PokedexScreen"}</Text>
      </View>
    );
  }

export default PokedexScreen;