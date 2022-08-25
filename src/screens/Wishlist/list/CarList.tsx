import { FlatList, View, Text } from "react-native";
import { cars } from "../../../Model/Car";
import CarItem from "../CarItem/CarItem";
import styles from "./CarList.style";

const CarList = () => {
    return(
        <View style={styles.mainViewContainer} >
            <FlatList
            style={styles.list}
             data={cars} 
             keyExtractor={(item, index) => index.toString()} 
             renderItem={({item}) => (
               <CarItem item={item} />
             )} />
        </View>
    )
};


export default CarList