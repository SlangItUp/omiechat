import React from 'react'
import LandingLeft from './landingleft.jsx'
import LandingRight from './landingright.jsx'

function Landing() {
  return (
    <div className="grid grid-cols-2 h-dvh">
    <LandingLeft />
    <LandingRight />
    </div>
  )
}

export default Landing