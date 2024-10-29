import { StyleSheet, Button, TextInput, View } from "react-native";

function TodoInput(props) {
    const [enteredTodoText, setEnteredTodoText] = useState('abc');
    const [todos, setTodos] = useState([]);
  
    function todoInputHandler(enteredText) {
      setEnteredTodoText(enteredText);
    };
  
    function addTodoHandler() {
      if (enteredTodoText) {
        setTodos((todos) => [
          ...todos, 
          {text: enteredTodoText, id: Math.random().toString()},
        ]);
        console.log(todos);
        // setEnteredTodoText('');
      };
    };
    
    return (
        <View>
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
    )
}

export default TodoInput;

const styles = StyleSheet.create({
    
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
})