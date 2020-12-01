import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from './style'

const Detail = ({route}) => {
console.log("🚀 ~ file: index.js ~ line 7 ~ Detail ~ route", route)
    return <View style={styles.mainContainer} >
        <Text>Detail</Text>
        <Button title='SignIn' />
        <Button title='Home' />
    </View>
}


export default Detail