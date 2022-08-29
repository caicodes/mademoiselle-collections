import { useEffect } from "react"

import "./Overlay.scss"
import anime from "animejs"

const Overlay = () => {
  useEffect(() => {
    anime({
      targets: ".overlay div",
      scaleX: 0,
      duration: 1500,
      delay: anime.stagger(200, { start: 1000 }),
      easing: "easeOutSine",
    })
    anime({
      targets: ".overlay",
      scaleX: 0,
      delay: 3500,
      easing: "easeOutSine",
    })
    anime({
      targets: ".content .item",
      opacity: [0, 1],
      duration: 300,
      delay: anime.stagger(500),
      easing: "easeOutSine",
    })
    anime({
      targets: "header",
      translateY: [-300, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 300,
      easing: "easeOutSine",
    })
  }, [])

  return (
    <div className="overlay">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Overlay
