import ProductCard from "./productCards.js"
import Post from "./posts.js"

const redirect = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"

export default async function Body() {

  const resOne = await fetch("http://localhost:3000/api/products", { cache: "no-store" });
  const products = await resOne.json();
  const visible = products.slice(0, 4); // Caso haja mais de 4 produtos (só exibimos 4)
  const resTwo = await fetch("http://localhost:3000/api/comments", {cache: "no-cache"});
  const comments = await resTwo.json();

  return (
    <section id="collection" className="max-w-full mx-auto px-6 py-12 text-center bg-gray-100 text-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Principais Instrumentos
      </h2>

      <p className="text-lg md:text-xl mb-8 leading-relaxed">
        Dê uma olhada no nosso catálogo inicial de produtos, incluindo
        instrumentos para todo tipo de público.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div id="about" className="mb-8 py-2">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Sobre Nós</h3>
          <p className="text-base leading-relaxed max-w-prose mx-auto">
            Veja mais sobre nossas informações, e verifique nossa reputação através
            das avaliações dos nossos clientes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {comments.map((c) => (
              <Post key={c.id} name={c.nome} handle={c.insta} text={c.texto} img={c.img}/>
          ))}
        </div>
      </div>
      
    <section class="flex justify-center items-center py-8">
      <div class="bg-white rounded-2xl shadow-md px-8 py-6 text-center">
        <h2 className="text-2xl font-bold">Siga nossas redes!</h2>
        <p className="text-gray-600 mb-6">E apoie nosso trabalho</p>
        
        <div class="flex justify-center gap-6">
          <a href={redirect} target="_blank">
            <img src="/assets/instagramLogo.png" alt="Instagram" class="w-12 h-12"/>
          </a>
          <a href={redirect} target="_blank">
            <img src="/assets/facebookLogo.png" alt="Facebook" class="w-12 h-12"/>
          </a>
          <a href={redirect} target="_blank">
            <img src="/assets/twitterLogo.webp" alt="Twitter" class="w-12 h-12"/>
          </a>
          <a href={redirect} target="_blank">
            <img src="/assets/whatsappLogo.png" alt="WhatsApp" class="w-12 h-12"/>
          </a>
        </div>
      </div>
    </section>


      <blockquote className="mx-auto max-w-lg italic text-lg text-black">
        <p style={{ fontFamily: "Dancing Script, 'Patrick Hand', 'Segoe UI', sans-serif" }}>
          “Nós fazemos música para viver.”
        </p>
        <cite className="block mt-2 text-sm not-italic text-gray-500">— Eddie Van Halen</cite>
      </blockquote>
    </section>
  )
}