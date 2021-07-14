import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const header = (probs) => {
    return (
        <View style={styles.container} >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{probs.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height: 75,
        width: '100%',
        paddingTop: 40,
        position: 'absolute',
        left: 0,
        top: 0,
        elevation: 5,
        backgroundColor: '#99CEE2',
        paddingLeft: 20,
    }
})

export default header;