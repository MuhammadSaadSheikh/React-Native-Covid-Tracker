import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
import {} from ''

//Screens
import homeScreen from './homeScreen'
import signInScreen from './signInScreen'
import signUpScreen from './signUpScreen'

//urils
// import { Navigator } from '../utils'

//Constant
// const { navigator } = Navigator

const LoginStack = createStackNavigator({
    Login : signInScreen,
    SignUp : signUpScreen
})

const ServiceStack = createStackNavigator({
    Home : homeScreen
})

const AppContainer = createStackNavigator().Navigator({
    LoginStack,
    ServiceStack
})

export default AppContainer