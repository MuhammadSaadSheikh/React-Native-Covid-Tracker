import React from 'react'
import { View, Text, Button } from 'react-native'

//Style
import styles from './style'

const SignUp = ({navigation}) => {
    return <View style={styles.mainContainer}>
        <Text>Home</Text>
        <Button onPress={ () => alert('Sign Up')} title='SignUp' />
    </View>
}


export default SignUp