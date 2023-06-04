import { StyleSheet } from 'react-native'

export const NAVBAR_STYLES = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

    position: 'absolute',
    top: 0,
  },
  unavailableView: {
    width: 42
  },
  backButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 22
  }
})