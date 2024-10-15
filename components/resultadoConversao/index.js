import { View, Text } from 'react-native';
import estilo from '../../assets/estilos';
import estiloResultado from './estilos';

export default function ResultadoConversao(props) {
  return (
    <View style={[estilo.boxCard, estiloResultado.areaResultado]}>
      <Text style={estiloResultado.resultado}>{props.resultado}</Text>
      <Text style={estilo.boxText}>{props.medidaResultado}</Text>
    </View>
  )
}