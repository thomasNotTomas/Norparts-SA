import { useState } from 'react'
import './App.css'
import Landing from './components/sections/Landing'
import MobileMenu from './components/MobileMenu'

function App() {

  return (
    <>
      <div>
        <Landing></Landing>
        <MobileMenu></MobileMenu>
      </div>
    </>
  )
}

export default App
