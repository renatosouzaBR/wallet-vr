import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { CardRegister } from '../screens/CardRegister'

const Stack = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='CardRegister' component={CardRegister} />
    </Stack.Navigator>
  )
}