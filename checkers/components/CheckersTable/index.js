import { View, StyleSheet } from "react-native";
import CheckersCell from "./CheckersCell";
import { useSelector } from "react-redux";

const CheckersTable = () => {
    const tableState = useSelector(state => state.game.table)
    return (
        <View style={styles.container}>
            {
                tableState.map((row) => {
                    return row.map(({isActive, piece, variant}) => {
                        return <CheckersCell isActive={isActive} piece={piece} variant={variant}/>
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