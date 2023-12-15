import React from 'react'
import './Hero.css'

function Hero({heroData}) {
  return (
    <section className='hero'>
        <h1>{heroData.title}</h1>
        <p>{heroData.text}</p>
        <button>{heroData.btn}</button>
    </section>
  )
}

export default Hero