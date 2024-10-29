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
        <Modal
            visible={props.visible}
            animationType='slide'
        >
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your Text?'
                    onChangeText={todoInputHandler}
                    value={enteredTodoText.toString()}
                />

                <View 
                    // style={styles.buttons}
                >
                    <Button 
                        title='Submit'
                        onPress={addTodoHandler}
                    />

                    <Button title="Cancel"
                        onPress={props.handler}
                    />

                </View>
            </View>
        </Modal>
    )
}

export default TodoInput;

const styles = StyleSheet.create({
    
  inputContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,

    flex: 1,

    // borderBottomWidth: 1,
    // borderBottomColor: 'gainsboro',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginRight: 5,
    flex: 1,
  },
})