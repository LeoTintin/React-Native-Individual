import { Text, View, Image, ScrollView, FlatList } from "react-native";
import { styled } from "./style";
import Banner from "../../Assets/OnePieceBanner.jpg";
import rec from "../../Assets/GurrenLagannBanner.jpg";
import reco from "../../Assets/JujutsuBanner.webp";
import recom from "../../Assets/MegaloboxBanner.webp";
import { ButtonComponents } from "../../Components/ButtonComponents";

const Animes = [
  { source: rec, alt: "Gurren Lagann" },
  { source: reco, alt: "Jujutsu kaisen" },
  { source: recom, alt: "Megalo Box" },
];
// {} chaves
// [] colchetes
export function Home() {
  return (
    <View style={styled.container}>
      <Image
        style={{ width: "95%", height: "50%", marginTop: "5%" }}
        source={Banner}
        alt="One Piece"
      ></Image>
      <Text style={styled.idiomas}>14 Dub Português| Legendado</Text>
      <Text style={styled.sinopse}>
        Em One Piece, conhecemos as aventuras de Monkey D. Luffy e sua equipe de
        piratas, navegando por oceanos fantásticos e ilhas exóticas em busca do
        maior tesouro já deixado pelo lendário Gold Roger,na esperança de
        proclamar para si o título de Rei dos Piratas.
      </Text>
      <ButtonComponents title="COMECE A ASSISTIR S1 E1" />
      <ButtonComponents
        title="Verifique a Classificação Indicativa"
        recebendoBackgroundColor="#333"
        recebendoCorTexto="#fff"
      />
      <Text style={styled.recomendations}>RECOMENDAÇÕES PARA VOCÊ</Text>
      <ScrollView horizontal={true}>
        <Image style={{ margin: 5, marginLeft:13 }} source={rec} alt="Gurren Lagann"></Image>
        <Image
          style={{ width: 222, height: 312, margin: 5 }}
          source={reco}
          alt="Jujutsu kaisen"
        ></Image>
        <Image
          style={{ width: 222, height: 312, margin: 5 }}
          source={recom}
          alt="Megalo Box"
        ></Image>
      </ScrollView>
    </View>
  );
}
