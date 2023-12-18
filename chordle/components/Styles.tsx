import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    keyboard: {
      // Define styles for the overall keyboard container
      flexDirection: 'row', // Arrange keys in a row
      flexWrap: 'wrap',     // Wrap keys to the next line
      justifyContent: 'center', // Center the keys
      margin: windowWidth / 100, // Add some margin around the keyboard
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: windowHeight / 12,
    },
    key: {
      // Define styles for individual keys
      alignItems: 'center', // Center content within the key
      justifyContent: 'center',
      width: windowWidth / 12,  // Width of each key
      height: windowHeight / 12, // Height of each key
      margin: windowWidth / 144,  // Margin around each key
      borderRadius: 2, // Rounded corners for keys
      backgroundColor: '#000', // Background color
    },
    specialKey: {
      alignItems: 'center', // Center content within the key
      justifyContent: 'center',
      width: windowWidth / 8,  // Width of each key
      height: windowHeight / 12, // Height of each key
      margin: windowWidth / 144,  // Margin around each key
      borderRadius: 2, // Rounded corners for keys
      backgroundColor: '#000', // Background color
    },
    keyText: {
      // Define styles for the text inside each key
      fontSize: windowWidth / 20, // Text size
      fontWeight: 'bold', // Text weight
      color: '#FFF', // Default text color
    },
    specailKeyText: {
      fontSize: windowWidth / 35,
      fontWeight: 'bold',
      color: '#FFF'
    }
  });

  export default styles;
  