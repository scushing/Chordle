import { StyleSheet, View } from "react-native";
import LetterBox from "./LetterBox";

const Word = ({word}) => {
    return(
        <View style={styles.wordContainer}>
            {word.map((letter, index) => (
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