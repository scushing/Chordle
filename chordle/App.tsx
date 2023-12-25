import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Keyboard from './components/Keyboard';
import { useEffect, useState } from 'react';
import WordsContainer from './components/WordsContainer'

export default function App() {

  const defaultKeyColor = '#FFF';
  const defaultLetterColor = '#000';
  const containsColor = 'orange';
  const notContainsColor = '#555';
  const correctPositionColor = 'green';

  const answer = 'EBB';

  const [level, setLevel] = useState(0);
  const [length, setLength] = useState(3);
  const [tries, setTries] = useState(4);

  const [keyColors, setKeyColors] = useState({
    A: defaultKeyColor,
    B: defaultKeyColor,
    C: defaultKeyColor,
    D: defaultKeyColor,
    E: defaultKeyColor,
    F: defaultKeyColor,
    G: defaultKeyColor,
    H: defaultKeyColor,
    I: defaultKeyColor,
    J: defaultKeyColor,
    K: defaultKeyColor,
    L: defaultKeyColor,
    M: defaultKeyColor,
    N: defaultKeyColor,
    O: defaultKeyColor,
    P: defaultKeyColor,
    Q: defaultKeyColor,
    R: defaultKeyColor,
    S: defaultKeyColor,
    T: defaultKeyColor,
    U: defaultKeyColor,
    V: defaultKeyColor,
    W: defaultKeyColor,
    X: defaultKeyColor,
    Y: defaultKeyColor,
    Z: defaultKeyColor,
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
        newWords[i][j] = {letter : '', color : defaultLetterColor};
      }
    }
    setWords(newWords);
  }

  const onKeyPress = (key) => {
    if (currentLetterIndex == length) {
      return;
    }
    let newWords = words;
    newWords[currentWordIndex][currentLetterIndex] = {letter: key, color: defaultLetterColor};
    setWords(newWords);
    setCurrentLetterIndex(currentLetterIndex + 1);
  }

  const onEnter = () => {
    if (currentLetterIndex != length || currentWordIndex == tries) {
      return;
    }
    let newWords = words;
    for (let i = 0; i < length; i++) {
      let contains = false;
      for (let j = 0; j < length; j++) {
        if (answer.charAt(j) === words[currentWordIndex][i].letter) {
          contains = true;
          if (i === j) {
            words[currentWordIndex][i] = {letter: words[currentWordIndex][i].letter, color: correctPositionColor};
            break;
          } else {
            words[currentWordIndex][i] = {letter: words[currentWordIndex][i].letter, color: containsColor};
          }
        }
      }
      if (!contains) {
        let newKeyColors = keyColors;
        newKeyColors[words[currentWordIndex][i].letter] = notContainsColor;
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
