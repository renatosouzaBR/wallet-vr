import 'react-native-gesture-handler';

import { useFonts } from 'expo-font';
import { PTSans_400Regular } from '@expo-google-fonts/pt-sans'
import { PTSansCaption_400Regular } from '@expo-google-fonts/pt-sans-caption'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { LoadingCards } from './src/screens/LoadingCards';

export default function App() {
  const [fontsLoaded] = useFonts({
    PTSans_400Regular,
    PTSansCaption_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <LoadingCards />
    </SafeAreaProvider>
  );
}