import Main from "./componente/main";
import { ImageBackground ,StyleSheet } from "react-native";

export default function App() {
  return (
    <ImageBackground style={style.ImageBackground} source={{uri:"https://areajugones.sport.es/wp-content/uploads/2021/08/anime-1080x609.jpg"}}>
    <Main></Main>    
    </ImageBackground> // Colo el fonod de lapantall principal 

  );
}

const style = StyleSheet.create({
  ImageBackground:{
    flex:1
  }
})


