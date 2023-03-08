import { Button, View, Text } from 'react-native';

const TabScreen1 = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Text>{"Tab1"}</Text>
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

export default TabScreen1;