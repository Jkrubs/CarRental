import React from 'react'
import { Hero } from '../Hero/Hero'
import { Featured } from '../Featured/Featured'
import { Banner } from '../Banner/Banner'
import { Reviews } from '../Reviews/Reviews'
import { Newsletter } from '../Newsletter/Newsletter'

export const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <Featured/>
      <Banner/>
      <Reviews/>
      <Newsletter/>
    </div>
  )
}
