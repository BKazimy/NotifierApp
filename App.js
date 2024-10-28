
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  function todoInputHandler(enteredText) {
    console.log(enteredText);
  };

  function addTodoHandler() {};

  return (
    // <View style={styles.container}>
    // <View style={styles.appContainer}>
    // <View style={{ 
    //   padding: '9%', 
    //   flexDirection: 'row', 
    //   width:'80%', 
    //   height: 300, 
    //   justifyContent: 'space-around', 
    //   alignItems: 'stretch', 
    //   borderWidth:1, 
    //   borderColor: 'red',
    //   }}>

    // <View
    //   style={{
    //     backgroundColor: 'red',
    //     flex: 1,
    //     // width: '33.33334%',
    //     // height: 100,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
    // >
    //   <Text>1</Text>
    // </View>
    //   <View
    //     style={{
    //       backgroundColor: 'green',
    //       flex: 1,
    //       // width: '33.33334%',
    //       // height: 100,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <Text>2</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: 'blue',
    //       flex: 1,
    //       // width: '33.33334%',
    //       // height: 100,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <Text>3</Text>
    //   </View>
    //   {/* <View style={styles.inputContainer}>
    //     <TextInput style={styles.TextInput} placeholder='Your course name:' />
    //     <Button title='Add Goal' />
    //   </View>
    //   <View>
    //     <Text>List of Goals...</Text>
    //   </View> */}

    //   {/* <Text
    //     style={styles.dummyStyle}
    //   >
    //     Hello world!
    //     </Text>
    //     <Button
    //       style={styles.dummyStyle}
    //       title="Im a button"
    //     /> */}
    // </View>
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder='Your Text?'
        onChangeText={todoInputHandler}
        />
        <Button title='Submit'/>
      </View>

      <View style={styles.toDoContainer}>
        <Text># Todo...</Text>
        <Text># Todo...</Text>
        <Text># Todo...</Text>
        <Text># Todo...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    paddingTop: 50,
    paddingHorizontal: 20,

    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'stretch',
    flex: 1,

    // borderWidth:1,
    // borderColor: 'red',
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingBottom: 15,

    flex: 1,

    // borderBottomWidth: 1,
    // borderBottomColor: 'gainsboro',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginRight: 5,
    flex: 8,
  },

  toDoContainer: {
    flex: 4,

    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginTop: '5%',

    borderTopWidth: 1,
    borderTopColor: 'gainsboro',
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
