import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';
import { TransactionContext } from '../Context/TransactionContext';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const {connectWallet} = useContext(TransactionContext); 
  const [menu, setMenu] = useState(false);
  return (
    <div className="py-4" >
      <div className='flex items-center text-white justify-between'>
        <Link to="/" className='text-2xl' style={{fontFamily: 'fruktur'}} >Se<span className='text-secondaryColor'>ll</span>ym</Link>
        {/* md menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to='/'>Home</Link>
          <Link to='/market'>Market</Link>
          <Link to='/crypto'>Cryptos</Link>
          <Link to='/tutorials'>Tutorials</Link>

          <Link to='/' className='ml-6'><Button buttonClass={'px-6 py-3 bg-secondaryColor font-semibold'} buttonName={'Send Crypto'} btnClick={connectWallet} /></Link>
        </div>
        {/* mobile menu */}
        <div className="md:hidden">
          {
            !menu ? (<span className='lg'><AiOutlineMenu onClick={() => setMenu(!menu)} /></span>) : (<div className="absolute right-0 top-[0] bg-gray-900 w-1/2 h-full bg-gray-500 gap-6 flex flex-col my-4 z-10 p-6 gap-8">
            <span className='text-white' ><AiOutlineClose onClick={() => setMenu(!menu)} /></span>
            <Link to='/'>Home</Link>
            <Link to='/market'>Market</Link>
            <Link to='/crypto'>Cryptos</Link>
            <Link to='/tutorials'>Tutorials</Link>

            {/* <Link to='/'><Button buttonClass={'px-6 py-3 bg-secondaryColor font-semibold'} buttonName={'Send Crypto'} btnClick={connectWallet} /></Link> */}
        </div>)
          }
          
          
        </div>
      </div>
    </div>
  )
}

export default Navbar