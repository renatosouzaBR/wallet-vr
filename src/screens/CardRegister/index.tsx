import { Alert, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'

import { COLORS } from "../../styles/colors"
import { BgAnimated } from "../../templates/BgAnimated"
import { Heading } from '../../components/Heading'
import { Button } from '../../components/Button'
import { Navbar } from '../../components/Navbar'
import { ControlledInput } from '../../components/Input/controlled-input'
import { api } from '../../configs/api'

import { CARD_REGISTER_STYLES } from './styles'
import { useEffect } from 'react'

const cardRegisterFormSchema = z.object({
  cardNumber: z.string().min(19),
  ownerName: z.string().min(1),
  dueDate: z.string().min(5),
  securityCode: z.string().min(3)
})

type CardRegisterFormType = z.infer<typeof cardRegisterFormSchema>;

const CardRegisterComponent = () => {
  const { navigate, goBack } = useNavigation();
  const { 
    control, 
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid } 
  } = useForm<CardRegisterFormType>({
    resolver: zodResolver(cardRegisterFormSchema)
  });

  async function handleSubmitForm(data: CardRegisterFormType) {
    try {
      const newCard = {
        number: data.cardNumber.replaceAll(' ', ''),
        cvv: data.securityCode,
        name: data.ownerName,
        dueDate: data.dueDate
      }

      const response = await api.post('cards', newCard)
      navigate('CardRegisterSuccess', { data: response.data })
    } catch (error) {
      Alert.alert('Ops...', 'Não foi possível cadastrar o cartão, tente novamente!')
    }
  }

  useEffect(() => {
    reset()
  }, [])

  return (
    <View style={CARD_REGISTER_STYLES.container}>
      <Navbar title='cadastro' onBackButtonPress={goBack} />
      <Heading text='Wallet Test' color={COLORS.white} />

      <ControlledInput
        control={control}
        name='cardNumber'
        label='número do cartão'
        placeholder='0000 0000 0000 0000'
        icon={<Feather name='camera' color='white' size={16} />}
        keyboardType='numeric'
        mask={[
          /\d/, /\d/, /\d/, /\d/, ' ', 
          /\d/, /\d/, /\d/, /\d/, ' ',
          /\d/, /\d/, /\d/, /\d/, ' ',
          /\d/, /\d/, /\d/, /\d/
        ]}
        autoFocus
      />
       
      <ControlledInput
        control={control}
        name='ownerName'
        label='nome do titular do cartão'
        placeholder='digite o nome do titular do cartão'
        autoCapitalize='words'
      />

      <View style={CARD_REGISTER_STYLES.rowGroupInputs}>
        <ControlledInput
          control={control}
          name='dueDate' 
          label='vencimento'
          placeholder='00/00'
          keyboardType='numeric'
          mask={[/\d/, /\d/, '/', /\d/, /\d/]}
        />
        <ControlledInput
          control={control}
          name='securityCode' 
          label='código de segurança'
          placeholder='***'
          keyboardType='numeric'
          mask={[/\d/, /\d/, /\d/]}
        />
      </View>

      <Button 
        text='avançar'
        disabled={!isValid}
        isLoading={isSubmitting}
        onPress={handleSubmit(handleSubmitForm)}
      />
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