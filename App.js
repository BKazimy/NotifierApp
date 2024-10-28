
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='Your course name:' />
        <Button title='Add Goal' />
      </View>
      <View>
        <Text>List of Goals...</Text>
      </View>

      {/* <Text
        style={styles.dummyStyle}
      >
        Hello world!
        </Text>
        <Button
          style={styles.dummyStyle}
          title="Im a button"
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginVertical: 50,
    marginHorizontal:30,
    borderWidth: 1,
    borderColor: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginRight: 5,
  }

  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // dummyStyle: {
  //   margin: 16,
  //   padding: 16,
  //   borderWidth: 2,
  //   borderColor: 'blue',
  // },
});
