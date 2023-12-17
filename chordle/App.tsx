import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Keyboard from './components/Keyboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Here's something</Text>
      <Keyboard onKeyPress={keyPress()} keyColors={"black"}/>
      <StatusBar style="auto" />
    </View>
  );
}

function keyPress() {return;}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
