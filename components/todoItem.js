import { StyleSheet, View, Text, Pressable } from "react-native";

function TodoItem(props) {
    return (
        <Pressable onPress={deleteTodoHandeler} >
            <View style={styles.todoItem}>
            <Text style={styles.todoText}>
                {props.id}_{props.text}
            </Text>
            </View>
        </Pressable>
    );
}

export default TodoItem;

const styles = StyleSheet.create({

  todoItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#57c',
    // color: 'white', // Style inheritence is not supported in react
  },
  
  todoText: {
    color: 'white',
  },
})