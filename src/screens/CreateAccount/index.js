import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from './style'

const CreateAccount = ({navigation}) => {
    return <View style={styles.mainContainer} >
        <Text>Create Account</Text>
        <Button title='SignIn' />
        <Button title='Home' />
    </View>
}


export default CreateAccount