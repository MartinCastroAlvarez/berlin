import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'

import { GetCoinsListAction } from '../redux/actions/getCoinsList_Action'

import { AnimationsIN } from '../constants/Animations'

// Calculate random effect from AnimationsIn 
const animation = AnimationsIN[Math.floor(Math.random() * AnimationsIN.length)]
console.log(animation)

const FiscalPage = () => {

    const dispatch = useDispatch()

    const getCoins = useSelector(state => state.getCoinsListReducer) // Get data Coins

    useEffect(() => {
        dispatch(GetCoinsListAction())
    }, [dispatch, GetCoinsListAction])

    return (
        // <Animatable.View animation={animation} duration={500} style={styles.container}>
        //     <ImageBackground style={styles.imageBackground} source={require("../assets/bg.jpg")}>
        //         <SafeAreaView>
        //             <View style={styles.menuBar}>
        //                 <Text style={styles.title}> Fiscales </Text>
        //             </View>
        //             <View style={styles.menuInfo}>
        //                 <Text style={styles.subTitle}> Debilidades: Baño </Text>
        //                 <Text style={styles.subTitle}> 80% corrupto </Text>
        //                 <Text style={styles.subTitle}> 100% sin vida </Text>
        //             </View>
        //         </SafeAreaView>
        //     </ImageBackground>
        //     <View style={styles.mainContainer}>
        //     </View>
        // </Animatable.View>
        <View>
            <Text>dasdas</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default FiscalPage