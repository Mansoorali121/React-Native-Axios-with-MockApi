import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens2/Home';

const Stack = createStackNavigator();
const HomeNavigation2 = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}  options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeNavigation2;

const styles = StyleSheet.create({})