import { Home } from './src/screens/home';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'react-native';

export default function App() {


  
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })
  SplashScreen.preventAutoHideAsync()
  
  if (fontsLoaded) {
    setTimeout(SplashScreen.hideAsync, 400)
    return (
      <>
        <StatusBar barStyle={'light-content'} />
        <Home />
      </>
    );
  }
  
}

