import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const inputContainer = (probs) => {

    const [input, setinput] = useState([{
        name: '',
        email: '',
        phoneno: '',
        interest: '',
        langauge: '',
    }])

    const submithandler = () => {
        const namevalid = "^[a-zA-Z.\\s]*$";
        const emailvalid = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
        if(!input.name.match(namevalid)){
            return Alert.alert('Warning!!!', 'Please Enter Valid Name', [{ text: 'OK', style: 'cancel' }]);
        }
        if(!input.email.match(emailvalid)){
            return Alert.alert('Warning!!!', 'Please Enter Valid Email', [{ text: 'OK', style: 'cancel' }]);
        }
        if(input.phoneno.length >10 || input.phoneno.length < 10){
            return Alert.alert('Warning!!!', 'Please Enter Valid Phone No.', [{ text: 'OK', style: 'cancel' }]);
        }
        if(!input.interest.match(namevalid)){
            return Alert.alert('Warning!!!', 'Please Enter Valid Area of Interest', [{ text: 'OK', style: 'cancel' }]);
        }
        if(!input.langauge.match(namevalid)){
            return Alert.alert('Warning!!!', 'Please Enter Valid Language', [{ text: 'OK', style: 'cancel' }]);
        }
        if (input.name === '' || input.email === '' || input.phoneno === '' || input.langauge === '' || input.interest === '') {
            return Alert.alert('Warning!!!', 'Please Enter All Your Details', [{ text: 'OK', style: 'cancel' }]);
        } else {
            probs.inputhandler(input);
            setinput({
                name: '',
                email: '',
                phoneno: '',
                interest: '',
                langauge: '',
            })
        }
    }

    const clearhandler = () => {
        setinput({
            name: '',
            email: '',
            phoneno: '',
            interest: '',
            langauge: '',
        })
    }

    return (
        <TouchableWithoutFeedback onPress={() => (Keyboard.dismiss())} >
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={styles.input}>
                        <TextInput placeholder='Enter Your Name' onChangeText={(text) => { setinput({ email: input.email, name: text, phoneno: input.phoneno, interest: input.interest, langauge: input.langauge }) }} value={input.name} style={styles.ip} />
                    </View>
                    <View style={styles.input}>
                        <TextInput placeholder='Enter Your Email' onChangeText={(text) => { setinput({ email: text, name: input.name, phoneno: input.phoneno, interest: input.interest, langauge: input.langauge }) }} value={input.email} keyboardType='email-address' style={styles.ip} />
                    </View>
                    <View style={styles.input}>
                        <TextInput placeholder='Enter Your Phone No.' onChangeText={(text) => { setinput({ email: input.email, name: input.name, phoneno: text, interest: input.interest, langauge: input.langauge }) }} value={input.phoneno} keyboardType='number-pad' style={styles.ip} />
                    </View>
                    <View style={styles.input}>
                        <TextInput placeholder='Enter Your Area of Interest' onChangeText={(text) => { setinput({ email: input.email, name: input.name, phoneno: input.phoneno, interest: text, langauge: input.langauge }) }} value={input.interest} style={styles.ip} />
                    </View>
                    <View style={styles.input}>
                        <TextInput placeholder='Programming Language' onChangeText={(text) => { setinput({ email: input.email, name: input.name, phoneno: input.phoneno, interest: input.interest, langauge: text }) }} value={input.langauge} style={styles.ip} />
                    </View>
                    <View style={styles.btn}>
                        <View>
                            <TouchableOpacity onPress={submithandler} style={styles.appButtonContainer}>
                                <Text style={styles.appButtonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={clearhandler} style={styles.appButtonContainer}>
                                <Text style={styles.appButtonText}>Clear</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: '1%',
        margin: 0,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginVertical: 9,
        padding: 10,
        backgroundColor: '#F7F7F7',
        borderColor: 'grey',
        borderRadius: 8,
        borderWidth: 2,
        width: '100%',
    },
    ip: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    btn: {
        flexDirection: 'row',
        paddingVertical: '6%',
        width: '60%',
        justifyContent: 'space-between'
    },
    appButtonContainer: {
        elevation: 3,
        backgroundColor: '#99CEE2',
        borderRadius: 8,
        padding: 12,
        width: '100%',
    },
    appButtonText: {
        fontSize: 13,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase'
    }
});

export default inputContainer;