import { Button, View, Text } from 'react-native';

const TabScreen3 = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Text>{"Tab3"}</Text>
        <Button
          title="Navigate Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

export default TabScreen3;