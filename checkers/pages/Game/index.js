import { View, StyleSheet, Text } from "react-native"
import CheckersTable from "../../components/CheckersTable";
import CheckersCell from "../../components/CheckersTable/CheckersCell";
import { clickedCell } from '../../reducers/gameReducer/gameSlice'
import { useDispatch } from "react-redux";

const Game = () => {
    const dispatch = useDispatch();
    dispatch(clickedCell());
    return (
        <View style={styles.container}>
            <Text>
                GAME
            </Text>
            {/* <CheckersCell variant={'light'}/>
            <CheckersCell variant={'dark'} piece={'light'}/>
            <CheckersCell variant={'dark'} piece={'dark'}/>
            <CheckersCell variant={'dark'} piece={'light'} isActive/>
            <CheckersCell variant={'dark'} piece={'dark'} isActive/> */}
            <CheckersTable />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Game;