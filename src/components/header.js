"use client";
import { Info, Phone, MapPin, Mail, Music, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [infoCardState, setInfoCard] = useState(false);

  return (
    <header className="relative flex justify-between items-center px-4 py-3 bg-gray-200">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Music className="text-black" size={20} />
        <h1 className="text-black text-xl font-bold">Loja VanHalen</h1>
      </div>

      {/* Links */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
        <ul className="flex space-x-6 text-gray-700">
          <li><a href="#collection">Coleção</a></li>
          <li><a href="#about">Sobre Nós</a></li>
        </ul>
      </nav>

      {/* Info - ícone */}
      
      <div className="flex items-center">
        <button
          className="order-1 md:order-2 md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
        <button
          className="order-2 ml-3 md:order-1 md:ml-0 text-gray-700 flex items-center"
          onClick={() => setInfoCard(!infoCardState)}
          aria-label="Abrir informações"
        >
          <Info size={20} />
        </button>
          <Info size={20} />
        
      </div>

      {infoCardState && (
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
      )}
      {/* Menu mobile */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-gray-100 shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700">
            <li><a href="#collection">Coleção</a></li>
            <li><a href="#about">Sobre Nós</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}