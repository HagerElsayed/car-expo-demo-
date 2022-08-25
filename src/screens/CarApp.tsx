import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, Pressable, Text, View } from "react-native";
import { MenuSvg } from "../assets/svg";
import colors from "../constants/Colors";
import CarDetails from "./Details/CarDetails";
import CarList from "./Wishlist/list/CarList";

const Stack = createStackNavigator()
const CarApp = () => {
    const menuViewStyle = {paddingHorizontal: 16}
    const closeViewStyle = {
        backgroundColor: '#fff',
        height: 40,
        width: 36.36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: 16,
        marginTop: 16
    }
    const closeText = {
        fontSize: 20,
        color: colors.gray_dar_color
    }
    return (
        <NavigationContainer>
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                  options={{
                    title: 'WishList',
                    headerTitleAlign: 'center',
                    headerLeft: () => <View style={ menuViewStyle }><MenuSvg size={22} /></View>,
                    headerTransparent: true,
                    cardStyle: {height: Dimensions.get('window').height},
                  }}
                  name={'WishList'}
                  key={'WishList'}
                  component={CarList}
                />

                <Stack.Screen
                  options={({navigation}) => ({
                    title: '',
                    headerLeft: () => (<Pressable onPress={() => navigation.pop()}>
                        <View style={closeViewStyle}>
                            <Text style={closeText}>X</Text>
                        </View>
                    </Pressable>),
                    headerTransparent: true,
                    cardStyle: {height: Dimensions.get('window').height},
                  })}
                  name={'CarDetails'}
                  key={'CarDetails'}
                  component={CarDetails}
                />  
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default CarApp;