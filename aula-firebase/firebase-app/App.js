import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { database } from './firebase-api';
import {ref, push, set, get, onValue, update } from "firebase/database";

export default function App() {
  const [totalChanges, setTotalChanges] = React.useState(0)
  const [totalValues, setTotalValues] = React.useState(0)

  const rootRef = ref(database)
  // this goes to root.user
  const userRef = ref(database, 'user/')
  // this goes to root.user.profile
  let profileRef = ref(database, 'user/profile/')
  // this also goes to root.user.profile
  profileRef = child(userRef, 'profile')

  React.useEffect(() => {
    console.log('useeffect')
    get(ref(database, 'test/')).then((snapshot) => {
      console.log('useeffect then')
      if (snapshot.exists()) {
        console.log('valor do get', snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.log('useeffect catch')
      console.error(error);
    });
  }, [])

  onValue(ref(database, 'test/'), (snapshot) => {
    const data = snapshot.val();
    console.log('olha o meu snap', data)
    console.log('olha as changes: ', totalChanges)
    setTotalChanges(totalChanges + 1);
  });

  const addRandomNumber = () => {
    const newPostKey = push(ref(database, 'test/')).key;
    const value = Math.floor(Math.random() * 1000)
    update(ref(database, 'test/'), {[newPostKey]: value})
    set(ref(database, 'test/'), {
      [value]: value,
    });
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={() => addRandomNumber()} title='add' />
      <Text>{`Total Changes: ${totalChanges}`}</Text>
      <Text>{`Total values: ${totalValues}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
