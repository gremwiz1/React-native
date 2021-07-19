import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export const Footer = ({ titleButton, navigation, activeMainScreen, activeSecondScreen, activeLastScreen }) => {

    return (
        <View style={styles.footer}>
            <View style={styles.navFooter}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('MainScreen');
                    }}>
                    <View style={activeMainScreen ? styles.activeIconNavigation : styles.iconNavigation}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('SecondScreen');
                }}>
                    <View style={activeSecondScreen ? styles.activeIconNavigation : styles.iconNavigation}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('LastScreen');
                }}>
                    <View style={activeLastScreen ? styles.activeIconNavigation : styles.iconNavigation}></View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}><Text style={styles.textButton}>{titleButton}</Text></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ffffff',
        borderRadius: 28,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44
    },
    footer: {
        padding: 20,
        justifyContent: 'flex-end'
    },
    navFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 22
    },
    iconNavigation: {
        width: 11,
        height: 11,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        marginRight: 6
    },
    activeIconNavigation: {
        width: 11,
        height: 11,
        borderRadius: 10,
        backgroundColor: 'rgb(255, 255, 255)',
        marginRight: 6
    },
    textButton: {
        textAlign: 'center',
        color: '#056fdd',
        fontSize: 22,
        lineHeight: 26,
        fontFamily: 'RobotoRegular',
        fontWeight: '400',
    }
})