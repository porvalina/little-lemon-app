import { useState } from 'react';
import * as React from 'react';
import {validateEmail} from "../utils";
import { StyleSheet, Text, Image, Pressable, TextInput, ScrollView, Alert,KeyboardAvoidingView, Platform} from 'react-native';

export default function FeedbackForm() {

  const [email, onChangeEmail] = useState(''); 
  
  const isEmailValid = validateEmail(email);

  const createSubscribeAlert = () =>
    Alert.alert('Thanks for subscribing, stay tuned!', '', [
      {text: 'OK', onPress: () => console.log('Thanks for ')},
    ]);
  
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.container}>
        <Image 
          style={styles.logo} 
          source={require('../img/little-lemon-logo-grey.png')
        }/>
        <Text style={styles.headingSection}> 
          Subscribe to our newsletter for our lates delicious recipes! 
        </Text> 
        <TextInput 
        style={styles.input} 
        value={email} 
        onChangeText={onChangeEmail} 
        keyboardType='email-address'
        placeholder='Type your email'
        />
        <Pressable
      style={!isEmailValid ? styles.disabledButton : styles.button}
      disabled={!isEmailValid}
      onPress={() => createSubscribeAlert()}
      >
        <Text style={styles.buttonText}>
          Subscribe
        </Text>
      </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  }, 
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    marginBottom: 32,
  },
  headingSection: { 
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
  }, 
    input: {
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
  },
  disabledButton: {
    backgroundColor: 'grey',
    borderColor: 'green',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    margin: 12,
  },
  button: {
    backgroundColor: 'darkgreen',
    borderColor: 'green',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    margin: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  });


  // <Pressable
  // style={email.indexOf('@') === -1 ? styles.disabledButton : styles.button}
  // onPress={() => createSubscribeAlert()}
  // disabled={email.indexOf('@') === -1 ? true : false}
  // >