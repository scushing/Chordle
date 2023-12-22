import { Dimensions, StyleSheet, View } from 'react-native';
import Word from './Word'

const windowHeight = Dimensions.get('window').height;

const WordContainer = ({words}) => {
    return(
        <View style={styles.wordsContainer}>
            {words.map((word, index) => (
                <Word key={index} word={word}/>
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