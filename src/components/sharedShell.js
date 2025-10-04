"use client"

import { useState } from "react"
import Header from "./header"
import Slideshow from "./slideshow"
import { Phone, MapPin, Mail } from "lucide-react"

export default function SharedShell({ slides }) {
  const [infoOpen, setInfoOpen] = useState(false)

  function toggleInfo() {
    setInfoOpen((s) => !s)
  }

  return (
    <>
      <Header onToggleInfo={toggleInfo} />
      <Slideshow slides={slides} onToggleInfo={toggleInfo} />
    </>
  )
}
