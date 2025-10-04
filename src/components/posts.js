export default function Post({ name, handle, text, img }) {
  return (
    <article className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex-none w-10 h-10 rounded-full bg-white/80 overflow-hidden flex items-center justify-center text-gray-700">
          {img ? (
            <img
              src={img}
              alt={name + " avatar"}
              className="w-full h-full object-cover"
            /> // Caso não haja url, cria o ícone genérico
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 21v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>

        <div className="flex-1">
          <div className="text-sm font-semibold text-left text-gray-800">{name}</div>
          <div className="text-xs text-left text-pink-600 mt-1">@{handle}</div>
        </div>
      </div>

      <p className="mt-3 text-sm text-left text-gray-800 leading-relaxed">
        {text}
      </p>
    </article>
  )
}