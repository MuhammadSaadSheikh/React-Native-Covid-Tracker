import React from 'react'
import { View, Text, Button } from 'react-native'

//Style
import styles from './style'

//Component
import { Cards } from '../../components'

const Home = ({navigation}) => {
    return <View style={styles.mainContainer}>
        <Text>Home</Text>
        <Button title='Sign In' onPress={() => navigation.push('SignIn') }  />
        <Button title='Sign Up' onPress={() => navigation.push('SignUp') }  />
        <Button title='React Native Naavigation' onPress={() => navigation.navigate('detail', { name: 'React Native Navigation' } ) }  />
    </View>
}

export default Home