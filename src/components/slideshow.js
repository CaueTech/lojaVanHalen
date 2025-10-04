"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Slideshow(props) {
  // Alguns atributos para configurar o slideshow
  var slides = props.slides
  if (!slides) slides = []

  var autoplay = true
  if (props.hasOwnProperty("autoplay")) autoplay = props.autoplay

  var interval = 5000
  if (props.interval) interval = props.interval

  var showDots = true
  if (props.hasOwnProperty("showDots")) showDots = props.showDots

  var showArrows = true
  if (props.hasOwnProperty("showArrows")) showArrows = props.showArrows

  var extraClass = ""
  if (props.className) extraClass = props.className

  // overlay opacity (0..1). Accept 0..100 or 0..1 from props.
  var imageOverlayOpacity = 0.5
  if (props.hasOwnProperty("imageOverlayOpacity")) {
    var v = props.imageOverlayOpacity
    if (v > 1) v = v / 100
    imageOverlayOpacity = Math.max(0, Math.min(1, v))
  }

  // Variáveis para regular comportamento do slide
  var state = useState(0)
  var index = state[0]
  var setIndex = state[1]

  var pausedState = useState(false)
  var isPaused = pausedState[0]
  var setIsPaused = pausedState[1]

  var timeoutRef = useRef(null)
  var touchStartX = useRef(null)

  var count = slides.length

  // Autoplay (slideshow passando automaticamente)
  useEffect(function () {
    if (!autoplay) return
    if (isPaused) return
    if (count <= 1) return

    // Reseta timer
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }

    // Cria novo timer
    timeoutRef.current = window.setTimeout(function () { // Função inline (lambda)
      setIndex(function (current) {
        var nextIndex = current + 1
        if (nextIndex >= count) nextIndex = 0
        return nextIndex
      })
    }, interval)

    //Limpeza
    return function () {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [index, autoplay, isPaused, interval, count])

  // Habilita comandos das setas do teclado
  useEffect(function () {
    function onKey(e) {
      if (e.key === "ArrowLeft") {
        prev()
      } else if (e.key === "ArrowRight") {
        next()
      }
    }
    window.addEventListener("keydown", onKey)
    return function () {
      window.removeEventListener("keydown", onKey)
    }
  }, [])

  // Comandos de navegação
  function prev() {
    setIndex(function (current) {
      var nextIndex = current - 1
      if (nextIndex < 0) nextIndex = count - 1
      if (nextIndex < 0) nextIndex = 0 // handle zero slides
      return nextIndex
    })
  }

  function next() {
    setIndex(function (current) {
      var nextIndex = current + 1
      if (nextIndex >= count) nextIndex = 0
      return nextIndex
    })
  }

  // Navegação pelas "bolinhas"
  function goTo(i) {
    var safe = i % count
    if (safe < 0) safe = 0
    setIndex(safe)
  }

  // Habilita as setas
  function onTouchStart(e) {
    if (e.touches && e.touches[0]) {
      touchStartX.current = e.touches[0].clientX
    } else {
      touchStartX.current = null
    }
  }

  function onTouchEnd(e) {
    if (touchStartX.current == null) return
    if (!e.changedTouches || !e.changedTouches[0]) {
      touchStartX.current = null
      return
    }
    var dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx > 50) {
      prev()
    } else if (dx < -50) {
      next()
    }
    touchStartX.current = null
  }

  // Não retorna nada caso não haja elementos em slides[]
  if (!slides || slides.length === 0) {
    return null
  }

  var containerWidth = count * 100
  var perSlide = 100 / count
  var translatePercent = -(index * perSlide)

  return (
    <div
      className={"relative overflow-hidden " + extraClass}
      onMouseEnter={function () { setIsPaused(true) }}
      onMouseLeave={function () { setIsPaused(false) }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <div id="slideshow"
        className="flex transition-transform duration-700"
        style={{ width: containerWidth + "%", transform: "translateX(" + translatePercent + "%)" }}
      >
        {slides.map(function (s, i) {
          return (
            <div
              key={i}
              className="w-full flex-shrink-0 relative"
              style={{ width: perSlide + "%" }}
              aria-hidden={i !== index}
              role="group"
              aria-roledescription="slide"
              aria-label={(i + 1) + " of " + count}
            >
                <img src={s.image} alt={s.title || ("slide-" + i)} className="w-full h-[640px] object-cover" />
                <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "rgba(0,0,0," + imageOverlayOpacity + ")" }}
                />  
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    {s.title ? <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">{s.title}</h2> : null}
                    {s.subtitle ? <p className="mt-3 text-white/90 max-w-2xl">{s.subtitle}</p> : null}
                </div>
            
            </div>
          )
        })}
      </div>

      {/* Setas */}
      {showArrows && count > 1 ? (
        <React.Fragment>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </React.Fragment>
      ) : null}

      {/* Pontos (bolinhas) */}
      {showDots && count > 1 ? (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map(function (_, i) {
            var dotClass = "w-3 h-3 rounded-full "
            dotClass += (i === index) ? "bg-white" : "bg-white/50"
            return (
              <button key={i} onClick={function () { goTo(i) }} className={dotClass} aria-label={"Go to slide " + (i + 1)} />
            )
          })}
        </div>
      ) : null}
    </div>
  )
}