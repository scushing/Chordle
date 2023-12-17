import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    keyboard: {
      // Define styles for the overall keyboard container
      flexDirection: 'row', // Arrange keys in a row
      flexWrap: 'wrap',     // Wrap keys to the next line
      justifyContent: 'center', // Center the keys
      margin: 10, // Add some margin around the keyboard
    },
    key: {
      // Define styles for individual keys
      alignItems: 'center', // Center content within the key
      justifyContent: 'center',
      width: 40,  // Width of each key
      height: 40, // Height of each key
      margin: 5,  // Margin around each key
      borderRadius: 5, // Rounded corners for keys
      backgroundColor: '#DDD', // Default background color
    },
    keyText: {
      // Define styles for the text inside each key
      fontSize: 18, // Text size
      fontWeight: 'bold', // Text weight
      color: '#FFF', // Text color
    },
  });

  export default styles;
  