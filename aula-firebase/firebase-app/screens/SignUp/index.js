import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Text>
          Sign
        </Text>
        <Text>
          Up
        </Text>
      </View>
    );
  }

export default HomeScreen;