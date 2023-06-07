import { useEffect } from "react"
import { Alert, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useSetRecoilState } from "recoil"

import { BgAnimated } from "../../templates/BgAnimated"
import { WalletIcon } from "../../assets/wallet"
import { api } from "../../configs/api"
import { cardsState } from "../../hooks/atoms"

import { LOADING_CARDS_STYLES } from "./styles"

const LoadingCardsComponent = () => {
  const { navigate } = useNavigation();
  const setCards = useSetRecoilState(cardsState)

  function handleNavigateToHome() {
    navigate('Home');
  }

  async function fetchCards() {
    try {
      const { data } = await api.get('cards');
      setCards(data);
      navigate('CardsList');
    } catch (error) {
      Alert.alert('Ops', 'Não foi possível carregar os cartões cadastrados, tente novamente!', [{
        text: 'Inicio',
        onPress: handleNavigateToHome
      }])
    }
  }

  useEffect(() => {
    fetchCards();
  }, [])

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