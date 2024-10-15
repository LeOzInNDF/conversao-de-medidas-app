import { View, Text, Button, TextInput } from 'react-native';
import estilo from '../../assets/estilos';
import estiloInput from './estilos';

export default function InputConversao(props) {
  return (
    <View style={estilo.boxCard}>
      <Text style={estilo.boxText}>{props.titulo}</Text>
      <View style={estiloInput.grupoInput}>
        <Text style={estiloInput.label}>{props.medida}</Text>
        <TextInput
          style={estiloInput.input}
          keyboardType="decimal-pad"
          defaultValue="0"
          onChangeText={props.funcaoTextoAlterado}
        />
      </View>
    </View>
  );
}