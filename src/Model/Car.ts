import { ImageSourcePropType } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import colors from "../constants/Colors"

export type Car = {  
 id: number
 type: String
 price: String
 image: ImageSourcePropType
 features: String
 carColors: CarColor[]
  
}

type CarColor = {
    id: number;
    color: string
    isSelected: Boolean
}

export const cars: Car[] = [
      {
            id: 1,
            type: "Perrin",
            price: "$95.000",
            image: require('../assets/Cars/blue_car.png'),
            features: "Android AutoAntilock BrakesApple CarPlayAudio Controls On Steering WheelAuxiliary InputBackup CameraBlind Spot MonitorBluetoothBrake AssistChild Safety LocksCooled Driver SeatDual Climate ControlHD RadioHeated Steering",
            carColors: [
                {id: 1, color: colors.dark_blue_color, isSelected: true},
                {id: 2, color: 'red', isSelected: false},
                {id: 3, color: 'gray', isSelected: false}
            ]},
            {
            id: 2,
            type: "Mercedes-AMG",
            price: "$116.000",
            image: require('../assets/Cars/grey_car.png'),
            features: "Android AutoAntilock BrakesApple CarPlayAudio Controls On Steering WheelAuxiliary InputBackup CameraBlind Spot MonitorBluetoothBrake AssistChild Safety LocksCooled Driver SeatDual Climate ControlHD RadioHeated Steering",
            carColors: [
               {id: 1, color: 'gray', isSelected: true},
               {id: 2, color: 'red', isSelected: false},
                {id: 3, color: 'orange', isSelected: false}
            ]
        },
            {
            id: 3,
            type: "Mercedes-AMG",
            price: "$113.000",
            image: require('../assets/Cars/yellow_car.png'),
            features: "Android AutoAntilock BrakesApple CarPlayAudio Controls On Steering WheelAuxiliary InputBackup CameraBlind Spot MonitorBluetoothBrake AssistChild Safety LocksCooled Driver SeatDual Climate ControlHD RadioHeated Steering",
            carColors: [
                {id: 1, color: 'yellow', isSelected: true},
                {id: 2, color: 'red', isSelected: false},
                {id: 3, color: 'gray', isSelected: false}
            ]
        }
    ]
