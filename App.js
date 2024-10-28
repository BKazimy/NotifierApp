
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.dummyStyle}
      >
        Hello world!
        </Text>
        <Button
          style={styles.dummyStyle}
          title="Im a button"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dummyStyle: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  },
});
