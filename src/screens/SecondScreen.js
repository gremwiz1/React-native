import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Normalize } from '../components/Normalize';
export const SecondScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.contentSecondScreen}>
                <View style={styles.paragraphText}>
                    <Text style={styles.textTitle}>Love</Text>
                    <Text style={styles.textContent}>When will I meet my soulmate?</Text>
                    <Text style={styles.textContent}>When will I get married?</Text>
                    <Text style={styles.textContent}>and others...</Text>
                </View>
                <View style={styles.paragraphText}>
                    <Text style={styles.textTitle}>Self</Text>
                    <Text style={styles.textContent}>What I am here to learn in life?</Text>
                    <Text style={styles.textContent}>Am I on the right path?</Text>
                    <Text style={styles.textContent}>and others...</Text>
                </View>
                <View style={styles.paragraphText}>
                    <Text style={styles.textTitle}>Daily life</Text>
                    <Text style={styles.textContent}>What is going to happen next?</Text>
                    <Text style={styles.textContent}>Any insight for today?</Text>
                    <Text style={styles.textContent}>and others...</Text>
                </View>
            </View>
            <Footer titleButton={'Awesome!'} navigation={navigation} activeMainScreen={false} activeSecondScreen={true}
                activeLastScreen={false} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000dff'
    },
    textTitle: {
        fontFamily: 'RobotoBold',
        fontSize: Normalize(26),
        fontWeight: '700',
        lineHeight: Normalize(32),
        letterSpacing: 0,
        textAlign: 'left',
        color: 'rgba(255, 255, 255, 0.4)'
    },
    textContent: {
        fontFamily: 'RobotoRegular',
        fontSize: Normalize(16),
        fontWeight: '400',
        lineHeight: Normalize(20),
        letterSpacing: 0,
        textAlign: 'left',
        color: 'rgb(255, 255, 255)'
    },
    paragraphText: {
        padding: 15
    },
    contentSecondScreen: {
        justifyContent: 'space-between',
        height: '68%'
    }
})