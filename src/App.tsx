
import React, {useState} from 'react';
import {Keyboard, Text, TextInput, StyleSheet, View} from "react-native";

import "./App.css";
import Word from './components/Word';

function App() {

    const [currentGuess, setCurrentGuess] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const trueWord = "fives";

    return (
        <div>
            <Word
                word={currentGuess}
                trueWord={trueWord}/>
        </div>
    )

}

export default App;