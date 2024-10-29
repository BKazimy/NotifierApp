import { useState } from "react";
import { StyleSheet, Button, TextInput, View, Modal } from "react-native";

function TodoInput(props) {
    const [enteredTodoText, setEnteredTodoText] = useState(1);

    function todoInputHandler(enteredText) {
      setEnteredTodoText(enteredText);
    };

    function addTodoHandler() {
        props.onAddTodo(enteredTodoText); // manually passes the parameters to onAddTodo
        setEnteredTodoText(enteredTodoText+1);
    }

    return (
        // <Modal>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your Text?'
                    onChangeText={todoInputHandler}
                    value={enteredTodoText.toString()}
                />
                <Button 
                    title='Submit'
                    onPress={addTodoHandler}
                />
            </View>
        // </Modal>
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