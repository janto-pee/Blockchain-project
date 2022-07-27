import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';
import { TransactionContext } from '../Context/TransactionContext';

const Navbar = () => {
  const {connectWallet} = useContext(TransactionContext); 
  return (
    <div className="py-4 " >
      <div className='flex items-center text-white justify-between'>
        <Link to="/" className='text-2xl' style={{fontFamily: 'fruktur'}} >Se<span className='text-secondaryColor'>ll</span>ym</Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to='/'>Home</Link>
          <Link to='/market'>Market</Link>
          <Link to='/crypto'>Cryptos</Link>
          <Link to='/tutorials'>Tutorials</Link>

          <Link to='/' className='ml-6'><Button buttonClass={'px-6 py-3 bg-secondaryColor font-semibold'} buttonName={'Send Crypto'} btnClick={connectWallet} /></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar