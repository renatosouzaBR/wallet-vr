import { StyleSheet } from 'react-native'

import { COLORS } from '../../styles/colors'

export const CARD_STYLES = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 28,
    backgroundColor: COLORS.black
  },
  cardDetails: {
    marginTop: 34,
    marginBottom: 14,
    gap: 4
  }
})