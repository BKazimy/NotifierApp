import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Submission from '../components/submission';
import { View } from 'react-native-web';

function Form({ navigation, newQuoteHandler, edit }) {
    const [quoteValue, setQuoteValue] = React.useState();
    const [storyValue, setStoryValue] = React.useState();
    const [authorValue, setAuthorValue] = React.useState();
    const [sourceValue, setSourceValue] = React.useState();
  
    if (edit) {
      setAuthorValue(edit.author);
      setStoryValue(edit.story);
      setQuoteValue(edit.quote);
    }
  
    function onSave() {
      newQuoteHandler(quoteValue, authorValue, storyValue, sourceValue);
    }
  
    function onCancel() {
      setAuthorValue();
      setStoryValue();
      setQuoteValue();
      setSourceValue();
  
      navigation.navigate('home');
    }
  
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <TextInput
            onChangeText={text => setQuoteValue(text)}
            value={quoteValue}
            style={styles.textInput}
            placeholder='Quote:'
          />
          <TextInput
            editable
            multiline
            numberOfLines={10}
            maxLength={500}
            onChangeText={text => setStoryValue(text)}
            value={storyValue}
            style={styles.textInput}
            placeholder='Example Story:'
          />
          <TextInput
            onChangeText={text => setAuthorValue(text)}
            value={authorValue}
            style={styles.textInput}
            placeholder='Author:'
          />
          <TextInput
            onChangeText={text => setSourceValue(text)}
            value={sourceValue}
            style={styles.textInput}
            placeholder='Source:'
          />
  
            <View style={styles.buttons}>
                <Submission
                    onCancel={onCancel}
                    onSave={onSave}
                />
            </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({

  textInput: {
    color: colors.dark,
    fontSize: 18,
    // fontWeight: 'bold',
    padding: 10,
    margin: 10,
    backgroundColor: colors.khaki,

    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 8,
  },

  buttons: {
    flex: 1,
    width: '100%',
    height: 10,
  }
});

export default Form;