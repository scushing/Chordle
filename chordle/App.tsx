import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Keyboard from './components/Keyboard';
import { useState } from 'react';
import WordsContainer from './components/WordsContainer'

export default function App() {

  const [level, setLevel] = useState(0);
  const [length, setLength] = useState(3);

  const [keyColors, setKeyColors] = useState({});
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const onKeyPress = (key) => {setWords[currentWordIndex](words[currentWordIndex] + key)}
  const onEnter = () => {setWords[currentWordIndex]("")}
  const onDelete = () => {setWords[currentWordIndex](words[currentWordIndex].slice(0, -1))}

  return (
    <View style={styles.container}>
      <WordsContainer words={[words]} wordLength={length}/>
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
