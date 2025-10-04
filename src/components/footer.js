import { Music } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="bg-white text-black py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center gap-2">
            <Music size={20} />
            <h3 className="text-lg font-semibold">Loja VanHalen</h3>
          </div>

          <p className="text-sm text-gray-500">A melhor loja do música do país!</p>

          <p className="text-xs text-gray-400 mt-4">© Copyright {year} | lojavanhallen@mock.com</p>
        </div>
      </div>
    </footer>
  );
}