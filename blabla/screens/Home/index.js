import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Button
          title="Navigate Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Navigate Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          title="Navigate Preferences"
          onPress={() => navigation.navigate('Preferences')}
        />
        <Button
          title="Navigate Age"
          onPress={() => navigation.navigate('Age')}
        />
        <Button
          title="Navigate Tab"
          onPress={() => navigation.navigate('TabGroup')}
        />
      </View>
    );
  }

export default HomeScreen;