import { ReactNode } from 'react';
import { View, TextInput, TextInputProps } from 'react-native'
import MaskInput, { MaskInputProps } from 'react-native-mask-input'

import { COLORS } from '../../styles/colors'
import { Text } from '../Text'
import { INPUT_STYLES } from './styles'

export interface InputProps extends MaskInputProps {
  label?: string;
  icon?: ReactNode
}

export function Input({ label, icon, ...rest }: InputProps) {
  return (
    <View style={INPUT_STYLES.container}>
      {!!label && 
        <Text text={label} color={COLORS.gray} size='sm' />
      }

      <View style={INPUT_STYLES.inputContainer}>
        {!!icon && 
          <View style={INPUT_STYLES.iconContainer}>
            {icon}
          </View>
        }

        <MaskInput 
          style={INPUT_STYLES.input}
          placeholderTextColor={COLORS.gray} 
          {...rest}
        />
      </View>
    </View>
  )
}