import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Keyboard from './components/Keyboard';
import { useEffect, useState } from 'react';
import WordsContainer from './components/WordsContainer'

export default function App() {

  const defaultColor = '#FFF';
  const notContainsColor = '#555';
  const answer = 'ATE';
  const [level, setLevel] = useState(0);
  const [length, setLength] = useState(3);
  const [tries, setTries] = useState(4);

  const [keyColors, setKeyColors] = useState({
    A: defaultColor,
    B: defaultColor,
    C: defaultColor,
    D: defaultColor,
    E: defaultColor,
    F: defaultColor,
    G: defaultColor,
    H: defaultColor,
    I: defaultColor,
    J: defaultColor,
    K: defaultColor,
    L: defaultColor,
    M: defaultColor,
    N: defaultColor,
    O: defaultColor,
    P: defaultColor,
    Q: defaultColor,
    R: defaultColor,
    S: defaultColor,
    T: defaultColor,
    U: defaultColor,
    V: defaultColor,
    W: defaultColor,
    X: defaultColor,
    Y: defaultColor,
    Z: defaultColor,
  });


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
    if (currentLetterIndex == length) {
      return;
    }
    let newWords = words;
    newWords[currentWordIndex][currentLetterIndex] = key;
    setWords(newWords);
    setCurrentLetterIndex(currentLetterIndex + 1);
  }

  const onEnter = () => {
    if (currentLetterIndex != length || currentWordIndex == tries) {
      return;
    }
    for (let i = 0; i < length; i++) {
      let contains = false;
      for (let j = 0; j < length; j++) {
        if (answer.charAt(j) === words[currentWordIndex][i]) {
          contains = true;
        }
      }
      if (!contains) {
        let newKeyColors = keyColors;
        newKeyColors[words[currentWordIndex][i]] = notContainsColor;
        setKeyColors(newKeyColors);
      }
    }
    setCurrentWordIndex(currentWordIndex + 1);
    setCurrentLetterIndex(0);
  }

  const onDelete = () => {
    let newWords = words;
    newWords[currentWordIndex][currentLetterIndex - 1] = '';
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex(currentLetterIndex - 1);
    }
  }

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
