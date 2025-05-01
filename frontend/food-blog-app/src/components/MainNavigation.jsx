import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function MainNavigation() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
