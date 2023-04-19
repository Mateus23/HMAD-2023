import { View, StyleSheet } from "react-native";
import CheckersCell from "./CheckersCell";
import { useSelector, useDispatch } from "react-redux";
import { startMovement } from "../../reducers/gameReducer/gameSlice";

const CheckersTable = () => {
    const tableState = useSelector(state => state.game.table)
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            {
                tableState.map((row, indexX) => {
                    return row.map(({isActive, piece, variant, isPossible}, indexY) => {
                        return <CheckersCell 
                            isActive={isActive}
                            isPossible={isPossible}
                            piece={piece}
                            variant={variant}
                            onPress={() => dispatch(startMovement({coord: [indexX, indexY]}))}
                        />
                    })
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        aspectRatio: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

export default CheckersTable;