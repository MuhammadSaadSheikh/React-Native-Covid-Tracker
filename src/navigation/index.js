import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createD }

//Screens
import { Home, SignIn, SignUp, CreateAccount, Profile, AccountSetting } from '../screens'

//Constant
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const AuthStack = () => {
    <Stack.Navigator headerMode={null} >
        <Stack.Screen name='Sign In' component={SignIn} options={{ title: 'Sign In' }} />
        <Stack.Screen name='Sign Up' component={SignUp} options={{ title: 'Sign Up' }} />
        <Stack.Screen name='Create Account' component={CreateAccount} options={{ title: 'Create Account' }} />
        {/* <Stack.Screen name='Account Setting' component={AccountSetting} options={{ title: 'Account Setting' }} />
        <Stack.Screen name='Profile' component={Profile} options={{ title: 'Profile' }} /> */}
    </Stack.Navigator>
}

const TabNavigator = () => {
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Account Setting' component={AccountSetting} />
        <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
}

// const DrawerNavigator = () => {
//     <Stack.Navigator>
//         <Stack.Screen component={} />
//     </Stack.Navigator>
// }

const AppContainer = () => {
    return <>
        <AuthStack />
        <TabNavigator />
    </>
}

export default AppContainer