import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Heading } from '../../components/Heading'
import { Button } from '../../components/Button'
import { COLORS } from '../../styles/colors'
import { BgAnimated } from '../../templates/BgAnimated'

import { HOME_STYLES } from './styles'

const HomeComponent = () => {
  const { navigate } = useNavigation();

  function handleNavigateToCardRegister() {
    navigate('CardRegister')
  }

  function handleNavigateToLoadingCards() {
    navigate('LoadingCards')
  }

  return (
    <View style={HOME_STYLES.container}>
      <Heading text='Wallet Test' color={COLORS.white} />

      <Button 
        text='meus cartões'
        onPress={handleNavigateToLoadingCards}
      />

      <Button 
        text='cadastrar cartão' 
        bgColor={COLORS.greenLight} 
        textColor={COLORS.blueDark}
        onPress={handleNavigateToCardRegister}
      />
    </View>
  )
}

export function Home() {
  return (
    <BgAnimated 
      children={<HomeComponent />}
    />
  )
}