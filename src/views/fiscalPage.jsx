import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'

import { AnimationsIN } from '../constants/Animations'

// Calculate random effect from AnimationsIn 
const animation = AnimationsIN[Math.floor(Math.random() * AnimationsIN.length)]
console.log(animation)

const FiscalPage = () => {

    return (
        <Animatable.View animation={animation} duration={500} style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={require("../assets/bg.jpg")}>
                <SafeAreaView>
                    <View style={styles.menuBar}>
                        <Text style={styles.title}> Fiscales </Text>
                    </View>
                    <View style={styles.menuInfo}>
                        <Text style={styles.subTitle}> Debilidades: Baño </Text>
                        <Text style={styles.subTitle}> 80% corrupto </Text>
                        <Text style={styles.subTitle}> 100% sin vida </Text>
                    </View>
                </SafeAreaView>
            </ImageBackground>
            <View style={styles.mainContainer}>
            </View>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center"
    },
    imageBackground: {
        position: "absolute",
        width: "100%",
        height: "60%"

    },
    menuBar: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    title: {
        color: "#fff",
        fontSize: 30,
        letterSpacing: 3   
    },
    menuInfo: {
        margin: 30,
        flexDirection: "column",
        alignItems: "flex-end",
    },
    subTitle: {
        color: "#FFF9",
        fontSize: 10,
    },
    mainContainer: {
        backgroundColor: "#262626",
        height: "70%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "60%",
        borderWidth: 10,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingTop: 10
    },
});

export default FiscalPage