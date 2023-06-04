import { ReactNode } from 'react';
import { View, TextInput, TextInputProps } from 'react-native'

import { COLORS } from '../../styles/colors'
import { Text } from '../Text'
import { INPUT_STYLES } from './styles'

interface InputProps extends TextInputProps {
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

        <TextInput 
          style={INPUT_STYLES.input}
          placeholderTextColor={COLORS.gray} 
          {...rest}
        />
      </View>
    </View>
  )
}