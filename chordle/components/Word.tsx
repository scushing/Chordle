import { StyleSheet, View } from "react-native";
import { useState } from "react";
import LetterBox from "./LetterBox";

const Word = ({word, wordLength}) => {

    const [displayedWord, setDisplayedWord] = useState([' '])

    return(
        <View style={styles.wordContainer}>
            {displayedWord.map((letter, index) => (
                <LetterBox key={index} letter={letter} color={'#000'}/>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    wordContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
});

export default Word;