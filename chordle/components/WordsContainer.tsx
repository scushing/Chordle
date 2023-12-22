import { Dimensions, StyleSheet, View } from 'react-native';
import Word from './Word'

const windowHeight = Dimensions.get('window').height;

const WordContainer = ({words, wordLength}) => {
    return(
        <View style={styles.wordsContainer}>
            {words.map((word, index) => (
                <Word key={index} word={word} wordLength={wordLength}/>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    wordsContainer: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: windowHeight / 12,
    },
});

export default WordContainer;