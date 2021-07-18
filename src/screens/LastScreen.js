import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Normalize } from '../components/Normalize';
export const LastScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View>
                <Text style={styles.opacityText}>How it works</Text>
                <Text style={styles.normalText}>Share birth details</Text>
                <Text style={styles.normalText}>Ask a question</Text>
                <Text style={styles.normalText}>An astrologer will make a prediction</Text>
                <Text style={styles.normalText}>Get your answer</Text>
            </View>
            <Footer titleButton={'Try now!'} navigation={navigation} activeMainScreen={false} activeSecondScreen={false} activeLastScreen={true} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000dff'
    },
    opacityText: {
        fontFamily: 'RobotoBold',
        fontSize: Normalize(32),
        fontWeight: '700',
        lineHeight: Normalize(40),
        letterSpacing: 0,
        textAlign: 'left',
        color: 'rgba(255, 255, 255, 0.4)',
        padding: 15
    },
    normalText: {
        fontFamily: 'RobotoBold',
        fontSize: Normalize(24),
        fontWeight: '700',
        lineHeight: Normalize(30),
        letterSpacing: 0,
        textAlign: 'left',
        color: 'rgb(255, 255, 255)',
        padding: 15
    },
    contentLastScreen: {
        justifyContent: 'space-between',
        height: '68%'
    }
})