"use client"
import { useState } from "react";

export default function ProductCard({ product }) {
  const [prodInfo, setInfo] = useState(false);

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm">
      <div className="h-64 overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="text-2xl font-bold mb-4">{product.price}</p>
        <button
          className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700"
          onClick={() => setInfo(!prodInfo)}
        >
          Saiba Mais
        </button>
      </div>
    {prodInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setInfo(false)}
            aria-hidden="true"
          />

          {/* modal */}
          <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 md:mx-0 overflow-hidden">
            <button
              onClick={() => setInfo(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 z-10"
              aria-label="Fechar detalhes do produto"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row">
              {/* image left */}
              <div className="md:w-1/2 w-full h-72 md:h-auto overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </div>

              {/* details right */}
              <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-700 mb-4">{product.info || product.description}</p>
                </div>
                <div className="text-2xl font-extrabold mb-4">{product.price}</div>
              </div>
            </div>
          </div>
        </div>
    )
    }
    </article>
  )
}