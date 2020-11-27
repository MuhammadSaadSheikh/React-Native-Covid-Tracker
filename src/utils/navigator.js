import { StackActions } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

//Constant
const navigation = useNavigation()

function navigate(routname, params){
    navigation.dispatch(
        StackActions.navigate({
            routname,
            params
        })
    )
}

function push(routname, params){
    navigation.dispatch(
        StackActions.push({
            routname,
            params
        })
    )
}

function goBack(){
    navigation.dispatch(StackActions.goBack())
}

export default {
    navigate,
    push,
    goBack
}