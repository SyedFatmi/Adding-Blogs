// import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Lists from '../Screens/Lists';
import Content from '../Screens/Content';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
    animation: 'slide_from_right',
};

export default function MainNavigation() {


    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={screenOptions}
                initialRouteName={'Home'}>
                <Stack.Screen name={'Home'} component={Home} />
                <Stack.Screen name={'Lists'} component={Lists} />
                <Stack.Screen name={'Content'} component={Content} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}