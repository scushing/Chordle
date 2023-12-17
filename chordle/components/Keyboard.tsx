import { TouchableOpacity, View, Text } from "react-native";
import styles from "./Styles";

const Keyboard = ({ onKeyPress, keyColors }) => {
    return (
      <View style={styles.keyboard}>
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((letter) => (
          <TouchableOpacity 
            key={letter}
            style={[styles.key, { backgroundColor: keyColors[letter] }]}
            onPress={() => onKeyPress(letter)}
          >
            <Text style={styles.keyText}>{letter}</Text>
          </TouchableOpacity>
        ))}
        {/* Add more rows as needed */}
      </View>
    );
  };
  
  export default Keyboard;