import { View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Navbar } from "../../components/Navbar";
import { Heading } from "../../components/Heading";
import { COLORS } from "../../styles/colors";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { BgAnimated } from "../../templates/BgAnimated";
import { StoragedCard } from "../../@types/navigation";

import { CARD_REGISTER_SUCCESS_STYLES } from "./styles";

interface CardRegisterSuccessParams {
  data: StoragedCard;
}

const CardRegisterSuccessComponent = () => {
  const { navigate, goBack } = useNavigation();
  const routes = useRoute();
  const { data } = routes.params as CardRegisterSuccessParams;

  function handleNavigateToLoadingCards() {
    navigate('LoadingCards')
  }

  function handleBack() {
    navigate('Home')
  }

  return (
    <View style={CARD_REGISTER_SUCCESS_STYLES.container}>
      <Navbar title='cadastro' onBackButtonPress={handleBack} />

      <View style={CARD_REGISTER_SUCCESS_STYLES.headers}>
        <Heading text='Wallet Test' color={COLORS.white} />
        <Heading 
          text='cartão cadastrado com sucesso' 
          color={COLORS.white} 
          size="h4"
        />
      </View>

      <Card 
        data={{
          cardNumber: data.number,
          dueDate: data.dueDate,
          ownerName: data.name
        }}
      />

      <Button text='avançar' onPress={handleNavigateToLoadingCards} />
    </View>
  )
}

export function CardRegisterSuccess() {
  return (
    <BgAnimated
      children={<CardRegisterSuccessComponent />}
    />
  )
}