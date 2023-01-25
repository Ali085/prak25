import React from 'react'
import Services from '../../Components/Services'
import Welcome from '../../Components/Welcome'
import Navbar from '../../Layouts/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <Welcome/>
    <Services/>
    </>
  )
}

export default Home