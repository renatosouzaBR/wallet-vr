import { View, ViewStyle } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { Heading } from '../Heading'
import { COLORS } from '../../styles/colors'
import { Text } from '../Text'

import { CARD_STYLES } from './styles'

interface CardProps extends RectButtonProps {
  data: {
    ownerName: string;
    cardNumber: string;
    dueDate: string;
  }
  style?: ViewStyle
}

export function Card({ data, style, ...rest }: CardProps) {
  const lastCardNumber = data.cardNumber.substring(12, 16)

  return (
    <RectButton style={[CARD_STYLES.container, style]} {...rest}>
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
    </RectButton>
  )
}