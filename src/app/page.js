import Header from "../components/header.js"
import Slideshow from "../components/slideshow.js"
import Body from "../components/body.js"
import Footer from "../components/footer.js"
import {Phone, MapPin, Mail} from "lucide-react"

const slides = [
  { image: "/assets/vanHalenShow.jpg", title: "A Melhor Loja de Música do País", subtitle: "Encontre aqui a sua próxima paixão no mundo da música"},
  { image: "/assets/jimiPic.jpg", title: "Coleção Exclusiva", subtitle: "Instrumentos, acessórios e mais" },
  { image: "/assets/beatlesPicture.webp", title: "Converse conosco!", subtitle: "Via email ou telefone", ctaText: "Mais Informações"}
]

export default function Home() {
  return (
    <>
      <Header/>
      <Slideshow slides = {slides}/>
      <Body/>
      <Footer/>
    </>
  );
}
