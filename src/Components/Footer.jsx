import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t-2 mt-12">
    <div className="md:w-11/12 mx-auto md:flex md:items-center md:justify-between md:py-6">
    <span className="text-sm text-gray-400 sm:text-center">© 2022 <a href="https://ayobami-adejumo.vercel.app/" className="hover:underline">Ayobami Adejumo</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-400 sm:mt-0">
        <li>
            <span className="mr-4 hover:underline md:mr-6 ">About</span>
        </li>
        <li>
            <span className="mr-4 hover:underline md:mr-6">Privacy Policy</span>
        </li>
        <li>
            <span className="mr-4 hover:underline md:mr-6">Licensing</span>
        </li>
        <li>
            <span className="hover:underline">Contact</span>
        </li>
    </ul>
    </div>
</footer>
  )
}

export default Footer