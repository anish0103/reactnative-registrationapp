import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import InputConatainer from './Components/inputContainer';
import Header from './Components/header';

export default function App() {

  const postlist = async (listdata) => {
    const data = {
      Name: listdata.name,
      Email: listdata.email,
      Phoneno: listdata.phoneno,
      Interest: listdata.interest,
      Langauge: listdata.langauge
    }
    const response = await fetch(`https://registrationapp-2fe08-default-rtdb.firebaseio.com/data.json`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    while (!response.ok);
    return Alert.alert('Congratulation', 'Your Details Are Submitted Successfully.', [{ text: 'OK', style: 'cancel' }]);
  }

  const inputhandler = (data) => {
    console.log(data)
    postlist(data)
  }

  return (
    <View style={styles.container}>
      <Header title={'Registration Detail'} />
      <InputConatainer inputhandler={inputhandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
