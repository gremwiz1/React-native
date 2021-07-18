import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
export const Header = ({ }) => {
    return (<View style={styles.header}>
        <View style={styles.headerLogo}><Image style={styles.logo} source={require('../../assets/logo.png')} /></View>
        <Text style={styles.headerText}>Calm</Text>
    </View>)
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingLeft: 20,
        height: 60,
        paddingTop: 20,
    },
    headerText: {
        fontFamily: 'RobotoBold',
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 35,
        letterSpacing: 0,
        textAlign: 'left',
        paddingLeft: 10,
        color: '#ffffff',
    },
    headerLogo: {
        width: 28,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})