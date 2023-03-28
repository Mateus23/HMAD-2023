import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const CheckersCell = (props) => {
    return (
        <View>
            <View />
        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {

//     },
//     piece: {

//     }
// })

CheckersCell.propTypes = {
    isActive: PropTypes.bool,
    variant: PropTypes.oneOf(['dark', 'light']),
    piece: PropTypes.oneOf(['dark', 'light', 'none']),
}

export default CheckersCell;