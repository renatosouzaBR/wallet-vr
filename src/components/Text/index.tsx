import { Text as TextRN } from 'react-native'

import { TEXT_STYLES } from './styles';

interface TextProps {
  text: string;
  size?: 'sm' | 'md'
  color?: string;
}

export function Text({ text, color, size = 'md' }: TextProps) {
  return (
    <TextRN style={[TEXT_STYLES.default, TEXT_STYLES[size], { color }]}>
      {text}
    </TextRN>
  )
}