import React from 'react'

//Screen
import Home from '../screens/Home'

export default class homeScreen extends React.Component{
    static navigationOptions = ({navigation}) => ({
        // header: null
    })
    render(){
        return <Home />
    }
}