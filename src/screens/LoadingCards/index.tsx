import { View } from "react-native"

import { BgAnimated } from "../../templates/BgAnimated"
import { WalletIcon } from "../../assets/wallet"

import { LOADING_CARDS_STYLES } from "./styles"

const LoadingCardsComponent = () => {
  return (
    <View style={LOADING_CARDS_STYLES.container}>
      <WalletIcon />
    </View>
  )
}

export function LoadingCards() {
  return (
    <BgAnimated
      children={<LoadingCardsComponent />}
    />
  )
}