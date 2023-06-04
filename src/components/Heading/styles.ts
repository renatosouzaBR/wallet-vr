import { StyleSheet } from 'react-native'

import { COLORS } from '../../styles/colors'

export const HEADING_STYLES = StyleSheet.create({
  default: {
    color: COLORS.grayDark,
    fontWeight: '400',
    fontFamily: 'PTSansCaption_400Regular',
  },
  h1: {
    fontSize: 28,
    lineHeight: 32
  },
  h2: {
    fontSize: 26,
    lineHeight: 28
  },
  h3: {
    fontSize: 22,
    lineHeight: 24
  },
  h4: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 20,
    lineHeight: 22
  },
  h5: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 18,
    lineHeight: 20
  }
})