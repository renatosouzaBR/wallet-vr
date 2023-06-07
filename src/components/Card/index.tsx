import { View } from 'react-native'

import { Heading } from '../Heading'
import { COLORS } from '../../styles/colors'
import { Text } from '../Text'

import { CARD_STYLES } from './styles'

interface CardProps {
  data: {
    ownerName: string;
    cardNumber: string;
    dueDate: string;
  }
}

export function Card({ data }: CardProps) {
  const lastCardNumber = data.cardNumber.substring(12, 16)

  return (
    <View style={CARD_STYLES.container}>
      <Heading 
        size='h5' 
        text='Black Card' 
        color={COLORS.white}
      />

      <View style={CARD_STYLES.cardDetails}>
        <Text
          text={data.ownerName}
          color={COLORS.white}
        />
        <Text 
          text={`**** **** **** ${lastCardNumber}`}
          color={COLORS.white} 
          size='sm'
        />
        <Text 
          text={`Validade ${data.dueDate}`}
          color={COLORS.white} 
          size='sm'
        />
      </View>
    </View>
  )
}