import { StyleSheet } from 'react-native'
import { COLORS } from '../../styles/colors'

export const CARDS_LIST_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blueDark
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-around'
  },
  cardsListContainer: {
    alignItems: 'center',
    gap: 16,
    paddingTop: 40,
    marginBottom: 50
  },
  cardsListContainerWithoutFocus: {
    position: 'absolute',
    top: '88%',
    left: 0,
    right: 0,
    paddingHorizontal: 30,
  },
  cardListView: {
    width: '100%',  
  },
  selectedCard: {
    gap: 100,
  }
})