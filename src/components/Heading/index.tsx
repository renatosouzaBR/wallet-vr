import { Text } from 'react-native'

import { HEADING_STYLES } from './styles';

interface HeadingProps {
  text: string;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
  color?: string;
}

export function Heading({ text, color, size = 'h1' }: HeadingProps) {
  return (
    <Text style={[HEADING_STYLES.default, HEADING_STYLES[size], { color }]}>
      {text}
    </Text>
  )
}