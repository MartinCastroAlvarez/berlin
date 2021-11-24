import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import * as Animatable from 'react-native-animatable'

import { AnimationsIN } from '../constants/Animations'

// Calculate random effect from AnimationsIn 
const animation = AnimationsIN[Math.floor(Math.random() * AnimationsIN.length)]
console.log(animation)

const HomePage = () => {
    return (
        <Animatable.View animation={animation} duration={1000} style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" />
            <Button icon="camera">
                Matar a Nisman
            </Button>
            <Animatable.Text animation={animation} duration={5000}> Nisman ha muerto</Animatable.Text>
        </Animatable.View>
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