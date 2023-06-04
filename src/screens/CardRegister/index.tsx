import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { COLORS } from "../../styles/colors"
import { BgAnimated } from "../../templates/BgAnimated"
import { Heading } from '../../components/Heading'
import { Input } from '../../components/Input'

import { CARD_REGISTER_STYLES } from './styles'
import { Button } from '../../components/Button'
import { Navbar } from '../../components/Navbar'

const CardRegisterComponent = () => {
  return (
    <View style={CARD_REGISTER_STYLES.container}>
      <Navbar title='cadastro' onBackButtonPress={() => false} />
      <Heading text='Wallet Test' color={COLORS.white} />

      <Input
        label='número do cartão'
        placeholder='digite os números do cartão'
        icon={<Feather name='camera' color='white' size={16} />}
        keyboardType='numeric'
      />
       
      <Input
        label='nome do titular do cartão'
        placeholder='digite o nome do titular do cartão'
        autoCapitalize='words'
      />

      <View style={CARD_REGISTER_STYLES.rowGroupInputs}>
        <Input 
          label='vencimento'
          placeholder='00/00'
          keyboardType='numeric'
        />
        <Input 
          label='código de segurança'
          placeholder='***'
          keyboardType='numeric' 
        />
      </View>

      <Button text='avançar' disabled />
    </View>
  )
}

export function CardRegister() {
  return (
    <BgAnimated 
      children={<CardRegisterComponent />}
    />
  )
}