import 'react-native-gesture-handler'
import * as React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Screens
import Home from './src/screens/Home'

//Constant
const Stack = createStackNavigator()

function App(props) {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' ></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
}

export default App
