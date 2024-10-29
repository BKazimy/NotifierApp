function TodoItem() {
    return (
        <View style={styles.todoItemContainer}>
          <Text style={styles.todoItems}>
            {itemData.item.id}_{itemData.item.text}
          </Text>
        </View>
    );
}

export default TodoItem;