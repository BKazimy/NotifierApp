import { StyleSheet, View, Text, Pressable } from "react-native";

function TodoItem(props) {

    return (
        <View style={styles.todoItem}>
            <Pressable 
                onPress={props.onDelete.bind(this, props.id)}
                android_ripple={{color: '#101466'}}
            >
                <Text style={styles.todoText}>
                    {props.id}_{props.text}
                </Text>
            </Pressable>
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