import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Keyboard from './components/Keyboard';
import { useEffect, useState } from 'react';

export default function App() {

  const [keyColors, setKeyColors] = useState({});
  const [word, setWord] = useState("");
  const onKeyPress = (key) => {setWord(word + key)}
  const onEnter = () => {setWord("")}
  const onDelete = () => {setWord(word.slice(0, -1))}

  return (
    <View style={styles.container}>
      <Text>{word}</Text>
      <Keyboard onKeyPress={onKeyPress} onEnter={onEnter} onDelete={onDelete} keyColors={keyColors}/>
      <StatusBar style="auto" />
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
