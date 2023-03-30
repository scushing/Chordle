
import React, {useState} from 'react';

import "./App.css";
import Word from './components/Word';
import Keyboard from './components/Keyboard';

function App() {

    const [currentGuess, setCurrentGuess] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const trueWord = "FIVES";

    return (
        <div>
            <Word
                word={currentGuess}
                trueWord={trueWord}/>
            <Keyboard
                letters={[""]}
                correctPosition={[""]}
                inWord={[""]}
                notInWord={[""]}
            />
        </div>
    )

}
export default App;