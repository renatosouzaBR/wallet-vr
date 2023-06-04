import 'react-native-gesture-handler';

import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { PTSans_400Regular } from '@expo-google-fonts/pt-sans'
import { PTSansCaption_400Regular } from '@expo-google-fonts/pt-sans-caption'

import { Button } from './src/components/Button';
import { Heading } from './src/components/Heading';

export default function App() {
  const [fontsLoaded] = useFonts({
    PTSans_400Regular,
    PTSansCaption_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button text="Primario" />
      <Button text="Desabilitado" disabled />
      <Button text="Secundario" bgColor='#ef5' textColor='#000' />
      <Heading text='teste' />
    </View>
  );
}