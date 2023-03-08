import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Text>{`Número de páginas no stack: ${navigation.getState().index}`}</Text>
        <Text style={{width: '80%'}}>{`Páginas: ${navigation.getState().routes.map(page => page.name)}`}</Text>
        <Button
          title="Navigate Home"
          onPress={() => console.log(navigation.getState())}
        />
        <Button
          title="Navigate Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Navigate Tab"
          onPress={() => navigation.navigate('TabGroup')}
        />
      </View>
    );
  }

export default HomeScreen;