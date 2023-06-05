import { View } from "react-native";

import { Navbar } from "../../components/Navbar";
import { Heading } from "../../components/Heading";
import { COLORS } from "../../styles/colors";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { BgAnimated } from "../../templates/BgAnimated";

import { CARD_REGISTER_SUCCESS_STYLES } from "./styles";

const CardRegisterSuccessComponent = () => {
  return (
    <View style={CARD_REGISTER_SUCCESS_STYLES.container}>
      <Navbar title='cadastro' onBackButtonPress={() => false} />

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
          cardNumber: 1234123412345659,
          dueDate: '01/28',
          ownerName: 'Renato Souza'
        }}
      />

      <Button text='avançar' />
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