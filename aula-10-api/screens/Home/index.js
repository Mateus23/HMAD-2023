import { Button, View } from 'react-native';

const HomeScreen = ({ navigation }) => {

    const idea = {
      activity: 'Pinta uma tela do picasso',
      price: 0.8,
      accessibility: 0.9,
      participants: 1,
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Button
          title="ActivityIdea"
          onPress={() => navigation.navigate('ActivityIdea')}
        />
        <Button
          title="ActivityList"
          onPress={() => navigation.navigate('ActivityList')}
        />
      </View>
    );
  }

export default HomeScreen;