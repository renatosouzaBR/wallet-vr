import { StyleSheet } from 'react-native'

import { COLORS } from '../../styles/colors'

export const TEXT_STYLES = StyleSheet.create({
  default: {
    color: COLORS.grayDark,
    fontWeight: '400',
    fontFamily: 'PTSans_400Regular',
  },
  sm: {
    fontSize: 14,
    lineHeight: 16
  },
  md: {
    fontSize: 16,
    lineHeight: 18
  },
})