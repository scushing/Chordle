import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <p>Here's something</p>
      <Word/>
      <StatusBar style="auto" />
      <Keyboard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
