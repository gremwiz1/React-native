import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Normalize } from '../components/Normalize';
export const MainScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header />
                <View style={styles.contentMainScreen}>
                    <View style={styles.contentText}>
                        <Text style={styles.textOpacity}>You have</Text>
                        <Text style={styles.textNormal}>millions of questions...</Text>
                    </View>
                    <View style={styles.contentText}>
                        <Text style={styles.textOpacity}>We have</Text>
                        <Text style={styles.textNormal}>answers in the stars!</Text>
                    </View>
                </View>
                <Footer titleButton={'Cool!'} navigation={navigation} activeMainScreen={true} activeSecondScreen={false} activeLastScreen={false} />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000dff'
    },
    textOpacity: {
        fontFamily: 'RobotoBold',
        fontSize: Normalize(40),
        fontWeight: '700',
        lineHeight: Normalize(48),
        letterSpacing: 0,
        textAlign: 'left',
        color: 'rgba(255, 255, 255, 0.4)'
    },
    textNormal: {
        fontFamily: 'RobotoBold',
        fontSize: Normalize(40),
        fontWeight: '700',
        lineHeight: Normalize(48),
        letterSpacing: 0,
        textAlign: 'left',
        color: 'rgb(255, 255, 255)'
    },
    contentText: {
        padding: 15
    },
    contentMainScreen: {
        justifyContent: 'space-between',
        height: '67%'
    }
})