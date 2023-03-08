import { View, Text, StyleSheet } from "react-native";

const HeaderTitle = ({route}) => {
    return (
        <View>
            <Text style={Style.text}>
                {`!!${route.name}!!`}
            </Text>
        </View>
    )
}

const Style = StyleSheet.create({
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#d55",
    }
})

export default HeaderTitle;