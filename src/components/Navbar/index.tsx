import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Heading } from '../Heading'
import { COLORS } from '../../styles/colors'

import { NAVBAR_STYLES } from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'

interface NavbarProps {
  title: string;
  onBackButtonPress: () => void;
}

export function Navbar({ title, onBackButtonPress }: NavbarProps) {
  return (
    <SafeAreaView style={NAVBAR_STYLES.container}>
      <BorderlessButton onPress={onBackButtonPress} style={NAVBAR_STYLES.backButton}>
        <Feather name='arrow-left' size={22} color={COLORS.blueLight} />
      </BorderlessButton>

      <Heading text={title} size='h3' color={COLORS.blueLight} />
      <View style={NAVBAR_STYLES.unavailableView} />
    </SafeAreaView>
  )
}