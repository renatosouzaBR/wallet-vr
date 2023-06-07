import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { COLORS } from '../../styles/colors'
import { Heading } from '../Heading'
import { BUTTON_STYLES } from './styles'
import { ActivityIndicator } from 'react-native';

interface ButtonProps extends RectButtonProps {
  text: string;
  disabled?: boolean;
  bgColor?: string;
  textColor?: string;
  isLoading?: boolean;
  onPress?: () => void;
}

export function Button({ disabled, text, bgColor, textColor, isLoading, ...rest }: ButtonProps) {
  return (
    <RectButton 
      style={[
        BUTTON_STYLES.container, 
        disabled && BUTTON_STYLES.disabled, 
        !!bgColor && { backgroundColor: bgColor }
      ]} 
      activeOpacity={disabled ? 0 : 0.2}
      {...rest}
    >
      {isLoading ? 
        <ActivityIndicator size='small' color={COLORS.white} /> :
        <Heading
          text={text} 
          size='h5' 
          color={disabled ? COLORS.gray : !!textColor ? textColor : COLORS.white}
        />
      }
    </RectButton>
  )
}