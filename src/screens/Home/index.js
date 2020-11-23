import React from 'react'
import { View, Text } from 'react-native'

//Style
import styles from './style'

//Component
import { Cards } from '../../components'

function Home(props) {
    return <View style={styles.mainContainer}>
        <Cards />
    </View>
}

export default Home