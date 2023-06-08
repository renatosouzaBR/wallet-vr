import { View, ViewStyle } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { Heading } from '../Heading'
import { COLORS } from '../../styles/colors'
import { Text } from '../Text'

import { CARD_STYLES } from './styles'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useEffect } from 'react'

interface CardProps extends RectButtonProps {
  data: {
    ownerName: string;
    cardNumber: string;
    dueDate: string;
  }
  style?: ViewStyle;
  animateCard?: boolean;
}

export function Card({ data, style, animateCard = false, ...rest }: CardProps) {
  const lastCardNumber = data.cardNumber.substring(12, 16)
  const springValue = useSharedValue(50);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: '100%',
      marginTop: withTiming(springValue.value, { duration: 1000, easing: Easing.elastic(5) })
    }
  })

  useEffect(() => {
    springValue.value = 0;
  }, [])

  return (
    <Animated.View style={animateCard && animatedStyle}>
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
    </Animated.View>
  )
}