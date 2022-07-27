import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';
import { TransactionContext } from '../Context/TransactionContext';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const {connectWallet} = useContext(TransactionContext); 
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div className='py-4'>
      <div className="flex flex-row space-x-6 items-center justify-between">
        <div className="logo">
        <Link to="/" className='text-2xl text-white' style={{fontFamily: 'fruktur'}} >Se<span className='text-secondaryColor'>ll</span>ym</Link>
        </div>
        <div className="hidden md:flex text-white items-center md:flex-row md:space-x-6">
          <Link to="/">Market</Link>
          <Link to="/">Exchange</Link>
          <Link to="/">Tutorials</Link>
          <Link to="/">Wallets</Link>
          
          <Link to='/' className='ml-6'><Button buttonClass={'px-6 py-3 bg-secondaryColor font-semibold'} buttonName={'Send Crypto'} btnClick={connectWallet} /></Link>
        
        </div>
        
        {
          !toggleMenu &&
          (<button className="block hamburger md:hidden focus:outline-none text-white text-xl"  onClick={handleToggle}
          ><GiHamburgerMenu /> </button>) 
        }


      {
        toggleMenu && (
          <div className="md:hidden">
          <div
            className="absolute top-0 right-0 bg-gray-300 flex flex-col p-6 w-6/12 space-y-8 h-full z-10"
          >
            <span className='text-right' onClick={handleToggle}><AiOutlineClose /></span>
            <Link to="/">Pricing</Link>
            <Link to="/">Product</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Careers</Link>
          </div>
        </div>
          )
      }
    
       
        
      </div>
    </div>
  )
}

export default Navbar