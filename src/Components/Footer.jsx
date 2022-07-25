import React from 'react'

const Footer = () => {
  return (
    <footer class="py-4 rounded-lg shadow md:flex md:items-center md:justify-between md:py-6 mt-16">
    <span class="text-sm text-gray-400 sm:text-center">© 2022 <a href="https://ayobami-adejumo.vercel.app/" class="hover:underline">Ayobami Adejumo</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-400 sm:mt-0">
        <li>
            <span class="mr-4 hover:underline md:mr-6 ">About</span>
        </li>
        <li>
            <span class="mr-4 hover:underline md:mr-6">Privacy Policy</span>
        </li>
        <li>
            <span class="mr-4 hover:underline md:mr-6">Licensing</span>
        </li>
        <li>
            <span class="hover:underline">Contact</span>
        </li>
    </ul>
</footer>
  )
}

export default Footer