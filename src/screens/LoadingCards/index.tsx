import { useEffect } from "react"
import { Alert } from "react-native"
import { useNavigation, useIsFocused } from "@react-navigation/native"
import { useSetRecoilState } from "recoil"
import Animated, { Easing, interpolateColor, useAnimatedProps, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

import { BgAnimated } from "../../templates/BgAnimated"
import { WalletIcon } from "../../assets/wallet"
import { api } from "../../configs/api"
import { cardsState } from "../../hooks/atoms"

import { LOADING_CARDS_STYLES } from "./styles"

const LoadingCardsComponent = () => {
  const { navigate } = useNavigation();
  const focused = useIsFocused();
  const setCards = useSetRecoilState(cardsState);

  const svgScaleAnimation = useSharedValue(1);
  const svgAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ 
        scale: withTiming(svgScaleAnimation.value, { duration: 100, easing: Easing.linear })
      }]
    }
  })
  const svgAnimatedProps = useAnimatedProps(() => {
    return {
      stroke: interpolateColor(svgScaleAnimation.value, [1, 1.5], ['#12C2E9', '#A5FF32'])
    }
  })

  function handleNavigateToHome() {
    navigate('Home');
  }

  async function fetchCards() {
    try {
      const { data } = await api.get('cards');
      setCards(data);
      // navigate('CardsList');
    } catch (error) {
      Alert.alert('Ops', 'Não foi possível carregar os cartões cadastrados, tente novamente!', [{
        text: 'Inicio',
        onPress: handleNavigateToHome
      }])
    }
  }

  useEffect(() => {
    if (focused) {
      fetchCards();
    }
  }, [focused])

  useEffect(() => {
    setTimeout(() => {
      svgScaleAnimation.value = 1.5;
    }, 1000);
  }, [])

  return (
    <Animated.View style={LOADING_CARDS_STYLES.container}>
      <WalletIcon 
        style={svgAnimatedStyle} 
        animatedProps={svgAnimatedProps}
      />
    </Animated.View>
  )
}

export function LoadingCards() {
  return (
    <BgAnimated
      children={<LoadingCardsComponent />}
      animate
    />
  )
}