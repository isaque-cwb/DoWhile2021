import { Home } from './src/screens/home';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  !fontsLoaded ? SplashScreen.preventAutoHideAsync() : setTimeout(SplashScreen.hideAsync, 3000)

  return (
    <Home />
  );
}

