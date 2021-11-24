import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" />
            <Button icon="camera">
                Matar a Nisman
            </Button>
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

export default HomePage