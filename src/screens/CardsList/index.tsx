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
  const [listOfCards, setListOfCards] = useState(cards)
  const [selectedCard, setSelectedCard] = useState({} as StoragedCard)

  function handleSelectCard(id: string) {
    if (selectedCard.id) {
      setSelectedCard({} as StoragedCard);
      setListOfCards(cards);
    } else {
      const cardsWithoutSelected = cards.filter(card => card.id !== id);
      const selectedCardFromList = cards.find(card => card.id === id);

      if (selectedCardFromList) setSelectedCard(selectedCardFromList);
      setListOfCards(cardsWithoutSelected);
    }
  }

  return (
    <View style={CARDS_LIST_STYLES.container}>
      <Header />

      <View style={CARDS_LIST_STYLES.content}>
        {selectedCard.id && 
          <View style={CARDS_LIST_STYLES.selectedCard}>
            <Card animateCard data={{
              cardNumber: selectedCard.number,
              dueDate: selectedCard.dueDate,
              ownerName: selectedCard.name
            }} />

            <Button text="pagar com este cartão" />
          </View>
        }

        <View 
          style={[
            CARDS_LIST_STYLES.cardsListContainer, 
            selectedCard.id ? CARDS_LIST_STYLES.cardsListContainerWithoutFocus : {}
          ]}>
            
          <ScrollView 
            style={CARDS_LIST_STYLES.cardListView}
            contentContainerStyle={{ paddingVertical: 60 }}
            showsVerticalScrollIndicator={false}
          >
            {listOfCards.map((card, index) => 
              <Card
                key={card.id}
                animateCard
                data={{
                  cardNumber: card.number,
                  dueDate: card.dueDate,
                  ownerName: card.name
                }}
                style={index > 0 ? { marginTop: -120 } : {}}
                onPress={() => handleSelectCard(card.id)}
              />
            )}
          </ScrollView>

          <Text text="usar este cartão" color={COLORS.white} />
        </View>
      </View>      
    </View>
  )
}