import { StyleSheet } from 'react-native'

import { COLORS } from '../../../../styles/colors'

export const HEADER_STYLES = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 14,
    backgroundColor: COLORS.grayLight,
    shadowColor: COLORS.blueDark,
    shadowOffset: { height: -10, width: 0 },
    shadowRadius: 20,
    shadowOpacity: 1,
    zIndex: 1
  },
  iconButton: {
    padding: 8,
    borderRadius: 20,
  },
  titleWrapper: {
    backgroundColor: COLORS.grayLight,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingVertical: 26,
    alignItems: 'center'
  },
})