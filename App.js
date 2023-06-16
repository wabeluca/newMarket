import { SafeAreaView, StatusBar, View } from 'react-native';
import Carrinho from './src/screens/carrinho';
import Mercado from './src/screens/mercado'

export default function App(){
  return (<View style={{flex:1}}>
    <SafeAreaView/>
     

      <Carrinho/>
      <StatusBar/>
  </View>
  );
}