import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { COLORS } from '../../styles/colors'
import { Heading } from '../Heading'
import { BUTTON_STYLES } from './styles'

interface ButtonProps extends RectButtonProps {
  text: string;
  disabled?: boolean;
  bgColor?: string;
  textColor?: string;
}

export function Button({ disabled, text, bgColor, textColor }: ButtonProps) {
  return (
    <RectButton 
      style={[
        BUTTON_STYLES.container, 
        disabled && BUTTON_STYLES.disabled, 
        !!bgColor && { backgroundColor: bgColor }
      ]} 
      activeOpacity={disabled ? 0 : 0.2}
    >
      <Heading
        text={text} 
        size='h5' 
        color={disabled ? COLORS.gray : !!textColor ? textColor : COLORS.white}
      />
    </RectButton>
  )
}