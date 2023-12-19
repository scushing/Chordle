import { View } from "react-native";
import LetterBox from "./LetterBox";

const Word = ({word}) => {
    return(
        <View>
            {word.split("").map(letter => (
                <LetterBox letter={letter} color={'#000'}/>
            ))}
        </View>
    );
}

export default Word;