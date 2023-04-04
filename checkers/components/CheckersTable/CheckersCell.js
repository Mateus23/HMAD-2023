import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const CheckersCell = ({isActive, piece, variant}) => {
    const cellColor = isActive ? 'active' : variant;
    return (
        <View style={StyleSheet.compose(styles.container, styles.cellColor[cellColor])}>
            <View style={StyleSheet.compose(styles.piece, styles.pieceColor[piece])}/>
        </View>
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
    variant: PropTypes.oneOf(['dark', 'light']).isRequired,
    piece: PropTypes.oneOf(['dark', 'light']),
}

export default CheckersCell;