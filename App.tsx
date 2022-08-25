import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './App.style';
import CarApp from './src/screens/CarApp';

export default function App() {
  return (
    <View style={styles.container}>
      <CarApp />
      <StatusBar style="auto" />
    </View>
  );
}

