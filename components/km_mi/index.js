import { ImageBackground, SafeAreaView } from "react-native";
import InputConversao from "../inputConversao";
import ResultadoConversao from "../resultadoConversao";
import background from "../../assets/background.jpg";
import estilo from "../../assets/estilos";
import { useState } from "react";


export default function KmParaMi() {


  const [milhas, setMilhas] = useState(0);

  function converteKMParaMi(quilometros) {
    const valorConvertido = quilometros / 1.60;

    setMilhas(valorConvertido.toFixed(2));
  }

  return (

    <SafeAreaView style={estilo.container}>
      <ImageBackground source={background} blurRadius={150} style={estilo.fundo}>
        <InputConversao titulo="Conversor de quilômetros para milhas" medida="Quilômetros" funcaoTextoAlterado={valorInput => converteKMParaMi(valorInput)} />
        <ResultadoConversao medidaResultado="Milhas" resultado={milhas} />
      </ImageBackground>
    </SafeAreaView>
  );
}