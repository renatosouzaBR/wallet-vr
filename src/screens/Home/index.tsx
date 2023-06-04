import { View } from 'react-native'

import { Heading } from '../../components/Heading'
import { Button } from '../../components/Button'
import { COLORS } from '../../styles/colors'
import { BgAnimated } from '../../templates/BgAnimated'

import { HOME_STYLES } from './styles'

const HomeComponent = () => {
   return (
    <View style={HOME_STYLES.form}>
      <Heading text='Wallet Test' color={COLORS.white} />
      <Button text='meus cartões' />
      <Button 
        text='cadastrar cartão' 
        bgColor={COLORS.greenLight} 
        textColor={COLORS.blueDark}
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