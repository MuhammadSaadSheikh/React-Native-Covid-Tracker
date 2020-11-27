import React from 'react'
import { View, Text, Button } from 'react-native'

//Style
import styles from './style'

//Component
import { Cards } from '../../components'

const Home = ({navigation}) => {
    return <View style={styles.mainContainer}>
        {/* <Cards /> */}
        <Text>Home</Text>
        <Button title='Sign In' onPress={() => navigation.navigate('Home') }  />
    </View>
}

export default Home