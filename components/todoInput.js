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
                {/* <View > */}
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Your Text?'
                        onChangeText={todoInputHandler}
                        value={enteredTodoText.toString()}
                    />
                {/* </View> */}

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='Submit'
                            onPress={addTodoHandler}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button title="Cancel"
                            onPress={props.handler}
                        />
                    </View>

                </View>
            </View>
        </Modal>
    )
}

export default TodoInput;

const styles = StyleSheet.create({
    
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '15%',

    borderBottomWidth: 1,
    borderBottomColor: 'gainsboro',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    height: 40,
    marginRight: 5,
    marginBottom: '10%',
    // flex: 1, // takes as much space as possible for 1 share

    // justifyContent: 'center',
    // alignItems: 'center',

    // borderWidth: 1,
    // borderColor: 'red',
  },
  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'flex-start',

    width: '100%',
    // flex: 1,
    
    // borderWidth: 1,
    // borderColor: 'red',
  },

  button: {
    width: '40%',
  }

})