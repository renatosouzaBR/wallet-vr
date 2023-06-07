import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { CardRegister } from '../screens/CardRegister'
import { CardRegisterSuccess } from '../screens/CardRegisterSuccess'
import { LoadingCards } from '../screens/LoadingCards'
import { CardsList } from '../screens/CardsList'

const Stack = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='CardRegister' component={CardRegister} />
      <Stack.Screen name='CardRegisterSuccess' component={CardRegisterSuccess} />
      <Stack.Screen name='LoadingCards' component={LoadingCards} />
      <Stack.Screen name='CardsList' component={CardsList} />
    </Stack.Navigator>
  )
}