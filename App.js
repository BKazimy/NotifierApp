
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    // <View style={styles.appContainer}>
    <View style={{ padding: '10%', flexDirection: 'row'}}>
    <View
      style={{
        backgroundColor: 'red',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>1</Text>
    </View>
      <View
        style={{
          backgroundColor: 'green',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>3</Text>
      </View>
      {/* <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='Your course name:' />
        <Button title='Add Goal' />
      </View>
      <View>
        <Text>List of Goals...</Text>
      </View> */}

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
  // appContainer: {
  //   width: "100%",
  //   padding: 50,
  // },
  // inputContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between'
  // },
  // TextInput: {
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   width: '80%',
  //   marginRight: 5,
  // }

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
