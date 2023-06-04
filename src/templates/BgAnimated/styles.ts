import { StyleSheet } from 'react-native'

import { COLORS } from '../../styles/colors'

export const BG_ANIMATED_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blueDark
  },
  bgDetail: {
    backgroundColor: COLORS.grayLight,
    width: '100%',
    maxWidth: 350,
    height: 236,
    opacity: 0.2,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: 'absolute',
  },
  bgDetailTop: {
    transform: [{ rotate: '-38deg' }, { translateX: -50 }, { translateY: -100 }],
    left: 0,
    top: 0
  },
  bgDetailBottom: {
    transform: [{ rotate: '-218deg' }, { translateX: -50 }, { translateY: -150 }],
    bottom: 0
  }
})