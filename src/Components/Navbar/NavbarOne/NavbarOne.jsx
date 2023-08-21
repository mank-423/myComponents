import React, { useState } from 'react'
import Button from './Button'
// To use this componenet in public/index.html
// Comment out this code
// <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
// <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

export default function NavbarOne() {

  let links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/" },
    { name: "About", link: "/" },
    { name: "Blogs", link: "/" },
    { name: "Contact", link: "/" },
  ]

  const [open, setOpen] = useState(false);


  return (
    <div>
      <div className='bg-white shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
            <span className='text-3xl text-indigo-600 mr-1 pt-2'>
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            Designer
          </div>

          <div 
            onClick={()=> setOpen(!open)}
            className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu-outline'}></ion-icon>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white 
          md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
          ${open ?'top-20 opacity-100':'top-[-490px] opacity-0 '}
          md:opacity-100`}>
            {
              links.map((link) => (
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                  <a href={link.link} className='text-gray-900 hover:text-gray-500 duration-400'>
                    {link.name}
                  </a>
                </li>
              ))
            }

            <Button>Get Started</Button>
          </ul>
        </div>
      </div>
    </div>
  )
}
