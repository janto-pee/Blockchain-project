import React, {useContext, useState} from 'react'
import Button from './Button'
import toke from '../Assets/womancard.png'
import { SiBlockchaindotcom } from 'react-icons/si'
import { BiHelpCircle } from 'react-icons/bi'
import Input from './Input'
import { TransactionContext } from '../Context/TransactionContext'

const Welcome = () => {

  const {connectWallet, currentAccount, formData, sendTransaction,handleSend, handleForm} = useContext(TransactionContext);

 
  
  return (
    <div className='overflow-hidden'>
      <div className="flex flex-col md:flex-row items-center gap-6 py-20 justify-between">
        <div className='w-full md:basis-7/12 flex justify-between items-center text-center md:text-start relative'>
          <div className='md:basis-2/3'>
            <small className='text-amber-200'>TRUSTED CRYPTOS</small>
            <h1 className='hidden md:block text-5xl font-semibold text-white mt-2 '>Buy and Sell Cryptos</h1>
            <h1 className='text-4xl md:hidden font-semibold text-white mt-2 '>Buy and Sell Cryptocurrency</h1>
            <p className="text-gray-500 mt-3 mb-6 md:max-w-sm">Lorem ipsum dolor sit amet consecte adipisicings.</p>
            {
              !currentAccount && (<Button buttonClass={'hidden md:flex px-6 py-3 bg-blue-400 font-semibold'} buttonName={'Connect Wallet'} btnClick={connectWallet} />)
            }
          </div>

          <div >
            <img src={toke} alt="" className='hidden md:flex absolute top-[-5rem] right-[-3.8rem] w-4/6' />
          </div>
        </div>
        <div className='w-full md:basis-4/12 flex flex-col'>
          <div className="relative p-2 bg-red-500 rounded-md h-32 flex flex-col text-white w-10/12 mx-auto">
            <div className="flex justify-between items-center">
              <SiBlockchaindotcom className='p-2 border border-gray-100 rounded-full' fontSize={'2rem'} />
              <BiHelpCircle />
            </div>
            <div className="flex flex-col mt-auto">
              <small>Ethereum</small>
              <h5 className="text-lg">123456790</h5>
            </div>
          </div>
          <div className="bg-gray-200 px-2 mt-2 rounded-md mx-auto">
            <Input inputType={'text'} inputName='addressTo' inputChange={handleForm} inputPlaceholder={'Address To'}  />
            <Input inputType={'number'} inputName='amount' inputChange={handleForm} inputPlaceholder={'Amount'} />
            <Input inputType={'text'} inputName='message' inputChange={handleForm} inputPlaceholder={'Message'} />
            <Button buttonClass={'px-6 py-3 bg-gray-700 text-white mb-2 font-semibold w-full hover:bg-sky-300'} buttonName={'Send Now'} btnClick={handleSend} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome