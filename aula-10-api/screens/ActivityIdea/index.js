import { View, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ActivityCard from '../../components/ActivityCard';
import { fetchActivity } from '../../reducers/activitySlice';

const ActivityIdeaScreen = () => {
    const idea = useSelector(state => state.activity.idea.data)
    const fetchStatus = useSelector(state => state.activity.idea.status)
    const dispatch = useDispatch();

    const getFetchButtonTitle = () => {
      if (fetchStatus === 'error'){
        return 'RETRY'
      }
      return 'GET IDEA'
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <ActivityCard idea={idea} status={fetchStatus}/>
        <Button
          title={getFetchButtonTitle()}
          onPress={() => dispatch(fetchActivity())}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    paddingVertical: 20,
    height: 400,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})

export default ActivityIdeaScreen;