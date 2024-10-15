import { ImageBackground, SafeAreaView } from "react-native";
import InputConversao from "../inputConversao";
import ResultadoConversao from "../resultadoConversao";
import estilo from "../../assets/estilos";
import background from "../../assets/background_b.jpeg";
import { useState } from "react";

export default function MiParaKm() {

  const [quilometros, setQuilometros] = useState(0);

  function converteMiParaKm(milhas) {
    const valorConvertido = milhas * 1.60;

    setQuilometros(valorConvertido.toFixed(2));
  }

  return (
    <SafeAreaView>
      <ImageBackground source={background} blurRadius={150} style={estilo.fundo}>
        <InputConversao titulo="Conversor de milhas para quilômetros" medida="Milhas" funcaoTextoAlterado={valorInput => converteMiParaKm(valorInput)} />
        <ResultadoConversao resultado={quilometros} medidaResultado="Quilômetros" />
      </ImageBackground>
    </SafeAreaView>
  );
}