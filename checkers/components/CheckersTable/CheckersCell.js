import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const CheckersCell = ({isActive, variant, piece}) => {
    return (
        <View style={StyleSheet.compose(styles.container, styles.cellColor[variant])}>
            <View style={StyleSheet.compose(styles.piece, styles.pieceColor[piece])}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '12.5%',
        aspectRatio: 1,
        backgroundColor: '#cc1'
    },
    piece: {
        flex: 1,
        borderRadius: '100%',
    },
    pieceColor: {
        dark: {
            backgroundColor: '#562400'
        },
        light: {
            backgroundColor: '#eed'
        },
    },
    cellColor: {
        dark: {
            backgroundColor: '#222'
        }
    }
})

CheckersCell.propTypes = {
    isActive: PropTypes.bool,
    variant: PropTypes.oneOf(['dark', 'light']),
    piece: PropTypes.oneOf(['dark', 'light', 'none']),
    // isQueen: PropTypes.bool,
}

export default CheckersCell;