import { StyleSheet, Dimensions, Text, View } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LetterBox = ({letter, color}) => {
    return (
        <View style={style.box}>
            <Text style={[style.letter, { color : letter.color }]}>{letter.letter}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    letter: {
      fontSize: windowWidth / 10,
      fontWeight: 'bold',
    },
    box: {
      alignItems: 'center',
      justifyContent: 'center',
      width: windowWidth / 6,
      height: windowWidth / 6,
      margin: windowWidth / 64,
      borderRadius: 2,
      backgroundColor: '#DDD',
    }
});

export default LetterBox;