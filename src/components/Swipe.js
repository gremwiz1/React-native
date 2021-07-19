import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MainScreen } from '../screens/MainScreen';
import { SecondScreen } from '../screens/SecondScreen';
import { LastScreen } from '../screens/LastScreen';

const Tab = createMaterialTopTabNavigator();
function Swipe() {
    return (

        <Tab.Navigator
            initialRouteName="MainScreen"
            tabBarOptions={{}}
            tabBarPosition='none'
        >
            <Tab.Screen
                name="MainScreen"
                component={MainScreen}
                options={{}}
            />
            <Tab.Screen
                name="SecondScreen"
                component={SecondScreen}
                options={{}}
            />
            <Tab.Screen
                name="LastScreen"
                component={LastScreen}
                options={{}}
            />
        </Tab.Navigator>
    );
}
export default Swipe;