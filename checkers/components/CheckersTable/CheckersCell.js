import { StyleSheet, View, Pressable  } from 'react-native';
import PropTypes from 'prop-types';

const CheckersCell = ({isActive, piece, variant, onPress, isPossible}) => {
    const cellColor = (isActive || isPossible) ? 'active' : variant;
    return (
        <Pressable onPress={onPress} style={StyleSheet.compose(styles.container, styles.cellColor[cellColor])}>
            <View style={StyleSheet.compose(styles.piece, styles.pieceColor[piece])}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "12.5%",
        backgroundColor: 'grey',
        aspectRatio: 1
    },
    cellColor: {
        dark: {
            backgroundColor: '#000',
        },
        light: {
            backgroundColor: '#ee8',
        },
        active: {
            backgroundColor: '#1a1',
        }
    },
    piece: {
        borderRadius: "100%",
        flex: 1,
    },
    pieceColor: {
        dark: {
            backgroundColor: '#555',
        },
        light: {
            backgroundColor: '#cc2',
        }
    }
})

CheckersCell.propTypes = {
    isActive: PropTypes.bool,
    isPossible: PropTypes.bool,
    variant: PropTypes.oneOf(['dark', 'light']).isRequired,
    piece: PropTypes.oneOf(['dark', 'light']),
    onPress: PropTypes.func,
}

export default CheckersCell;