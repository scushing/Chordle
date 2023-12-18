import { TouchableOpacity, View, Text } from "react-native";
import styles from "./Styles";

const Keyboard = ({ onKeyPress, onEnter, onDelete, keyColors }) => {
    return (
      <View style={styles.keyboard}>
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((letter) => (
          <TouchableOpacity 
            key={letter}
            style={styles.key}
            onPress={() => onKeyPress(letter)}
          >
            <Text style={[styles.keyText, { color : '#FFF' }]}>{letter}</Text>
          </TouchableOpacity>
        ))}
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((letter) => (
          <TouchableOpacity 
            key={letter}
            style={styles.key}
            onPress={() => onKeyPress(letter)}
          >
            <Text style={[styles.keyText, { color : "#FFF" }]}>{letter}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
            style={styles.specialKey}
            onPress={() => onEnter()}
        >
            <Text style={styles.specailKeyText}>ENTER</Text>
        </TouchableOpacity>
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((letter) => (
          <TouchableOpacity 
            key={letter}
            style={styles.key}
            onPress={() => onKeyPress(letter)}
          >
            <Text style={[styles.keyText, { color : "#FFF" }]}>{letter}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
            style={styles.specialKey}
            onPress={() => onDelete()}
        >
            <Text style={styles.specailKeyText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Keyboard;