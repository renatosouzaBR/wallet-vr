import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import { COLORS } from "../../../../styles/colors";
import { Heading } from "../../../../components/Heading";

import { HEADER_STYLES } from "./styles";

export function Header() {
  const { navigate } = useNavigation();
  const { top } = useSafeAreaInsets();
  
  function handleAddNewCard() {
    navigate('CardRegister')
  }

  return (
    <View style={HEADER_STYLES.container}>
      <View style={[HEADER_STYLES.header, { paddingTop: top }]}>
        <BorderlessButton style={HEADER_STYLES.iconButton}>
          <Feather name="arrow-left" size={22} color={COLORS.blueLight} />
        </BorderlessButton>

        <Heading text="Wallet Test" size="h3" color={COLORS.blueDark} />

        <BorderlessButton style={HEADER_STYLES.iconButton} onPress={handleAddNewCard}>
          <Feather name="plus" size={22} color={COLORS.blueLight} />
        </BorderlessButton>
      </View>

      <View style={HEADER_STYLES.titleWrapper}>
        <Heading size="h4" text="Meus cartões" color={COLORS.blueLight} />
      </View>
    </View>
  )
}