import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Navbar, Welcome, Footer, Services, Transactions} from './Components'

const App = () => {

  return (
    <div className='min-h-screen bg-primaryColor'>
      <div className='w-11/12 mx-auto'>
      <Navbar />
        <Welcome />
        <Services />
        <Transactions />
      </div>
      <Footer />
    </div>
  )
}

export default App
