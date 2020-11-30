import React from 'react'
import { View, Text } from 'react-native'

//Styling
import styles from './style'

export default function Loading(){
    return <View style={styles.mainContainer} >
        <Text> Loading... </Text>
    </View>
}