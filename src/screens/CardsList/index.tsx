import { useState } from "react"
import { View, ScrollView } from "react-native"
import { useRecoilValue } from "recoil"

import { COLORS } from "../../styles/colors"
import { Card } from "../../components/Card"
import { Text } from "../../components/Text"
import { Button } from "../../components/Button"
import { cardsState } from "../../hooks/atoms"
import { StoragedCard } from "../../@types/navigation"

import { Header } from "./components/Header"
import { CARDS_LIST_STYLES } from "./styles"

export function CardsList() {
  const cards = useRecoilValue(cardsState);

  const [selectedCard, setSelectedCard] = useState({} as StoragedCard)

  return (
    <View style={CARDS_LIST_STYLES.container}>
      <Header />

      <View style={CARDS_LIST_STYLES.content}>
        {selectedCard.id && 
          <View style={CARDS_LIST_STYLES.selectedCard}>
            <Card data={{
              cardNumber: cards[0].number,
              dueDate: cards[0].dueDate,
              ownerName: cards[0].name
            }} />

            <Button text="pagar com este cartão" />
          </View>
        }

        <View 
          style={[
            CARDS_LIST_STYLES.cardsListContainer, 
            selectedCard.id ? CARDS_LIST_STYLES.cardsListContainerWithoutFocus : {}
          ]}>
            
          <ScrollView style={CARDS_LIST_STYLES.cardListView}>
            {cards.map((card, index) => 
              <Card
                key={card.id}
                data={{
                  cardNumber: card.number,
                  dueDate: card.dueDate,
                  ownerName: card.name
                }}
                style={index > 0 ? { marginTop: -120 } : {}}
              />
            )}
          </ScrollView>

          <Text text="usar este cartão" color={COLORS.white} />
        </View>
      </View>      
    </View>
  )
}