import React, { useState } from 'react'

export default function Navtwo() {

  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: 'Chart_fill' },
    { title: "Inbox", src: 'Chat' },
    { title: "Accounts", src: 'User', gap: true },
    { title: "Schedule", src: 'Calendar' },
    { title: "Search", src: 'Search' },
    { title: "Analytics", src: 'Chart' },
    { title: "Files", src: 'Folder', gap: true },
    { title: "Setting", src: 'Setting' },
  ]

  return (
    <div className='flex'>
      <div className={`${open ? "w-72" : "w-20"} h-screen bg-blue-900 relative duration-300`}>
        <div className={`absolute cursor-pointer rounded-full -right-3 
            top-9 w-8 border-2 border-blue-900 bg-white
            ${!open && 'rotate-180'}
            `}
          onClick={() => setOpen(!open)}
        >
          <span className='flex h-7 justify-center items-center'>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </span>
        </div>

        <div className='flex gap-x-4 items-center'>
          <div className={`flex justify-center items-center cursor-pointer duration-500 bg-blue-700 rounded-full ${open && 'rotate-[360deg]'}`}>
            <ion-icon size="large" name="logo-ionic"></ion-icon>
          </div>
          <h1 className={`text-white origin-left
              font-medium text-xl duration-300 ${!open && 'scale-0'}`}>
            Designer
          </h1>
        </div>

        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer 
                p-2 hover:bg-blue-400 rounded-md ${menu.gap ? 'mt-9' :'mt-2'} ${index === 0 && 'bg-blue-400'}`}>
              {/* Some issue with rendering of images */}
              <img src={"./assets/Chart.png"} alt={`${index}`} />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
        <h1>Home Page</h1>
      </div>
    </div>
  )
}
