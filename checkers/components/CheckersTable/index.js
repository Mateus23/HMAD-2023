import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CheckersCell from "./CheckersCell";

const CheckersTable = () => {
    return (
        <View style={styles.container}>
            {
                Array.from(Array(64).keys()).map((_, index) => {
                    const variant = (Math.floor(index / 8) + index) % 2 === 0 ? 'light' : 'dark'
                    return <CheckersCell key={index} variant={variant}/>
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        aspectRatio: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export default CheckersTable;