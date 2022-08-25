import { StyleSheet } from 'react-native';
import colors from "../../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 50,
        paddingHorizontal: 25,
        paddingTop: 20,
        backgroundColor: '#fff',
        borderRadius: 25,
        flex: 1,
    },
    image: {
        flex: 1,
        width: "100%",
        height: 150,
        marginTop: -100,
        marginBottom: 10,
        zIndex: 1,
    },
    type: {
        color: colors.car_primary_color,
        fontSize: 14,
        fontWeight: "bold"
    },
    price: {
        fontSize: 12,

    },
    priceView: {
        flexDirection: "row",
        justifyContent:"space-between",
        paddingTop: 10,
        paddingBottom: 20
    }
    
});

export default styles;