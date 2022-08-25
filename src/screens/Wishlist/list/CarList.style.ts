import { StyleSheet } from "react-native";
import colors from "../../../constants/Colors";

const styles = StyleSheet.create({
 list: {
    paddingTop: 30
 },
 mainViewContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 100,
    backgroundColor: colors.car_mainBG_color
 },
 title: {
    fontWeight: 'bold',
    color: colors.dark_color,
    textAlign: 'center'
 }
})

export default styles;