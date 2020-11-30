import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'

//Style
import styles from './style'

//Component
// import { Cards } from '../../components'

const SignIn = ({navigation}) => {
    return <View style={styles.mainContainer}>
        {/* <Cards /> */}
        <Text style={styles.heading} >Sign In</Text>
        {/* <Button title='Sign Up' onPress={() => navigation.push('Signup') }  /> */}
        <TouchableOpacity onPress={ () => navigation.push('CreateAccount')} >
            <Text> Create Account </Text>
        </TouchableOpacity>
    </View>
}

export default SignIn