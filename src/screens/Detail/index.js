import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from './style'

const Detail = ({navigation}) => {
    return <View style={styles.mainContainer} >
        <Text>Detail</Text>
        <Button title='SignIn' />
        <Button title='Home' />
    </View>
}


export default Detail