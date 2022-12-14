import { View, Image, Text, Pressable } from "react-native";
import styles from "./CarItem.style";
import { HeartSvg } from "../../../assets/svg";
import colors from "../../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Car } from "../../../Model/Car";

export type RootStaclParamList = {
  CarDetails: {item: Car};
}
const CarItem = ({ item }: any) => {
  const navigation = useNavigation<StackNavigationProp<RootStaclParamList>>()
    return (
      <Pressable onPress={()=> navigation.navigate("CarDetails", item)}>
      <View style={styles.container}>
        <Image style={styles.image} source={item.image} />
         <Text style={styles.type}>{item.type}</Text>
        <View style={styles.priceView}>
            <Text style={styles.price}>{item.price}</Text>
            <HeartSvg size={22} color={colors.dark_blue_color}/>
         </View> 

        
      </View>
      </Pressable>
    );
  }
  
  export default CarItem;