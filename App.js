import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput, 
  ScrollView 
} from 'react-native';

export default function App() {
  const [enteredTodoText, setEnteredTodoText] = useState('');
  const [todos, setTodos] = useState([1,2,3,4,5,6,7,8,9,3,4,34,345,2342,3234,234,234]);

  function todoInputHandler(enteredText) {
    setEnteredTodoText(enteredText);
  };

  function addTodoHandler() {
    if (enteredTodoText) {
      setTodos([...todos, enteredTodoText]);
      // console.log(todos);
      // setEnteredTodoText('');
    };
  };

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
        value={enteredTodoText}
        />
        <Button 
        title='Submit'
        onPress={addTodoHandler}
        />
      </View>

      <View style={styles.toDoContainer}>
        <ScrollView>
          {todos.toReversed().map((todo, idx) => (
            <View // round borders are not supported in <text> on ios so we wrap it in <View>
              key={todos.indexOf(todo)}
              style={styles.todoItemContainer}
            >
              <Text 
                style={styles.todoItems}
              >
                {todo}
              </Text>
            </View>
          ))}
        </ScrollView>
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
    flex: 1,
  },

  toDoContainer: {
    flex: 5,

    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginTop: '5%',

    borderTopWidth: 1,
    borderTopColor: 'gainsboro',
  },

  todoItemContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#57c',
    // color: 'white', // Style inheritence is not supported in react
  },
  
  todoItems: {
    color: 'white',
  },

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
