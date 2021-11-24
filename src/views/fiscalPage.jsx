import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const FiscalPage = () => {
    return (
        <View style={styles.container}>
            <Text> Fiscal page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FiscalPage