import { NativeBaseProvider } from 'native-base';
import {SignIn} from './src/screens/SignIn';
import { THEME } from './src/styles/theme';
import {useFonts,Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Loading } from './src/components/loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular,Roboto_700Bold})

  return (
    <NativeBaseProvider theme={THEME}> 
  { fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>



  );
}