import Header from "../components/header.js"
import Slideshow from "../components/slideshow.js"
import Body from "../components/body.js"
import Footer from "../components/footer.js"
import {Phone, MapPin, Mail} from "lucide-react"

export function Modal(){
  const [infoCardState, setInfoCard] = useState(null);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/10 backdrop-blur-md"
            onClick={() => setInfoCard(false)}
            aria-hidden="true"
          />
          <div className="relative bg-white rounded-xl shadow-lg p-8 w-96 z-50">
            <button
              onClick={() => setInfoCard(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              aria-label="Fechar informações"
            >
              ✕
            </button>

            <h2 className="text-xl text-black font-bold mb-4">Informações</h2>
            <dl className="mt-4 space-y-4 text-left">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-gray-700 mt-1" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-medium text-gray-800">Telefone</dt>
                  <dd className="text-sm text-gray-600">
                    <a href="tel:+5571912341234" className="hover:underline">(71) 91234-1234</a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-700 mt-1" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-medium text-gray-800">Endereço</dt>
                  <dd className="text-sm text-gray-600">
                    <address className="not-italic">Salvador, BA — Av. Abbey Road, 123</address>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-gray-700 mt-1" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-medium text-gray-800">Email</dt>
                  <dd className="text-sm text-gray-600">
                    <a href="mailto:lojavanhallen@mock.co" className="hover:underline">lojavanhallen@mock.co</a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
  );
}

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
