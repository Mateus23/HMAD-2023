import {  StyleSheet, Text, View, ActivityIndicator } from "react-native";

const ActivityCard = ({idea, status}) => {
    const getPriceString = (value) => {
        const priceStrings = ['free', 'very cheap', 'cheap', 'medium', 'expensive', 'very expensive'];
        return priceStrings[Math.ceil(value*5)]
    }

    const getDifficultString = (value) => {
        const difficultStrings = ['ridiculous', 'very easy', 'easy', 'medium', 'hard', 'very hard'];
        return difficultStrings[Math.ceil(value*5)]
    }

    const getColor = (value) => {
        const redValue = Math.min(Math.round(value * 510), 255)
        const greenValue = Math.min(Math.round((1 -value) * 510), 255)

        console.log('cor: ', `rgb(${redValue},${greenValue},0`)

        return `rgb(${redValue},${greenValue},0)`
    }

    return (
        <View style={styles.container}>
            {status === 'loading' && <ActivityIndicator size="large" />}
            {status === 'error' && <Text style={styles.errorText}>ERROR</Text>}
            {status === 'succeeded' &&
                <View style={{flex: 1}}>
                    <Text style={styles.title}>{`${idea.activity}`}</Text>
                    <View  style={styles.propertyContainer}>
                        <Text>{`Participants: ${idea.participants}`}</Text>
                    </View>
                    <View style={{...styles.propertyContainer, backgroundColor: getColor(idea.accessibility)}}>
                        <Text>{`Difficulty: ${getDifficultString(idea.accessibility)}`}</Text>
                    </View>
                    <View  style={{...styles.propertyContainer, backgroundColor: getColor(idea.price)}}>
                        <Text>{`Price: ${getPriceString(idea.price)}`}</Text>
                    </View>
                </View>
            }
        </View >
    )
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
    title: {
        fontSize: 28,
        textAlign: 'center',
        flex: 0.4,
        paddingHorizontal: 20
    },
    propertyContainer: {
        flex: 0.2,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red',
    },
})

export default ActivityCard