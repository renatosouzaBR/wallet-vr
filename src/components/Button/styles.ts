import { StyleSheet } from 'react-native'

import { COLORS } from '../../styles/colors'

export const BUTTON_STYLES = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    borderRadius: 12, 
    paddingHorizontal: 20,
    backgroundColor: COLORS.blueLight,

    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: COLORS.grayLight,
  }
})