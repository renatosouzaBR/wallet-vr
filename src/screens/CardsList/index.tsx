import { View } from "react-native"
import { BorderlessButton } from "react-native-gesture-handler"
import { Feather } from '@expo/vector-icons'
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Heading } from "../../components/Heading"
import { COLORS } from "../../styles/colors"
import { Card } from "../../components/Card"
import { Text } from "../../components/Text"
import { Button } from "../../components/Button"

import { CARDS_LIST_STYLES } from "./styles"

export function CardsList() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={CARDS_LIST_STYLES.container}>
      <View style={[CARDS_LIST_STYLES.header, { paddingTop: top }]}>
        <BorderlessButton style={CARDS_LIST_STYLES.iconButton}>
          <Feather name="arrow-left" size={22} color={COLORS.blueLight} />
        </BorderlessButton>

        <Heading text="Wallet Test" size="h3" color={COLORS.blueDark} />

        <BorderlessButton style={CARDS_LIST_STYLES.iconButton}>
          <Feather name="plus" size={22} color={COLORS.blueLight} />
        </BorderlessButton>
      </View>

      <View style={CARDS_LIST_STYLES.titleWrapper}>
        <Heading size="h4" text="Meus cartões" color={COLORS.blueLight} />
      </View>

      <View style={CARDS_LIST_STYLES.cardsList}>
        <Card
          data={{
            cardNumber: "1234123412345659",
            dueDate: '01/28',
            ownerName: 'Renato Souza'
          }}
        />

        <Card
          data={{
            cardNumber: "1234123412342344",
            dueDate: '01/31',
            ownerName: 'João Carlos'
          }}
        />

        <Text text="usar este cartão" color={COLORS.white} />
        <Button text="pagar com este cartão" />
      </View>
    </View>
  )
}