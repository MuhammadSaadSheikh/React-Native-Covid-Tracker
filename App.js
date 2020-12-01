import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'

import RootStack from './src/navigation'

const AuthContext = React.createContext()
const [ isToken, handleToken ] = useState(false)

export default App = () => {
  return <AuthContext.Provider>
    <NavigationContainer>
      <RootStack useeToken={isToken} />
    </NavigationContainer>
  </AuthContext.Provider>
}
