import { StyleSheet } from "react-native";

function TodoItem(props) {
    return (
        <View style={styles.todoItem}>
          <Text style={styles.todoText}>
            {props.item.id}_{props.item.text}
          </Text>
        </View>
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