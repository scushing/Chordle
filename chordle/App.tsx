import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Keyboard from './components/Keyboard';
import { useEffect, useState } from 'react';
import WordsContainer from './components/WordsContainer'

export default function App() {

  const [level, setLevel] = useState(0);
  const [length, setLength] = useState(3);
  const [tries, setTries] = useState(4);

  const [keyColors, setKeyColors] = useState({});
  const [words, setWords] = useState([[]]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    initDisplay();
  }, []);

  const initDisplay = () => {
    let newWords = [];
    for (let i = 0; i < tries; i++) {
      newWords[i] = [];
      for (let j = 0; j < length; j++) {
        newWords[i][j] = '';
      }
    }
    setWords(newWords);
  }

  const onKeyPress = (key) => {
    let newWords = words;
    newWords[currentWordIndex][currentLetterIndex] = key;
    setWords(newWords);
    setCurrentLetterIndex(currentLetterIndex + 1);
  }

  const onEnter = () => {initDisplay();}

  const onDelete = () => {setWords[currentWordIndex](words[currentWordIndex].slice(0, -1))}

  return (
    <View style={styles.container}>
      <WordsContainer words={words}/>
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
