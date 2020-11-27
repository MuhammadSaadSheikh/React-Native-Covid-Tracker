import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Screen
import { Home, SignUp, SignIn, CreateAccount } from './src/screens'

//Constant
const AuthStack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

export default App = () => {
  return <NavigationContainer>
    {/* <AuthStack.Navigator>
      <AuthStack.Screen name='Home' component={Home} options={{title : 'Home'}} />
      <AuthStack.Screen name='SignIn' component={SignIn} options={{title : 'Sign In'}} />
      <AuthStack.Screen name='SignUp' component={SignUp} />
    </AuthStack.Navigator> */}
    <BottomTab.Navigator>
      <BottomTab.Screen name='Home' component={Home} />
      <BottomTab.Screen name='Signin' component={SignIn} />
      <BottomTab.Screen name='CreateAccount' component={CreateAccount} />
    </BottomTab.Navigator>
  </NavigationContainer>
}
