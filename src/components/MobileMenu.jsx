import React from 'react'
import NavItemMobile from './buttons/NavItemMobile'

function MobileMenu() {
  return (
    <div className='fixed bottom-0 left-0
                    flex justify-between
                    px-16 py-4
                    bg-brand-700
                    w-full'>
                    <NavItemMobile></NavItemMobile>
                    <NavItemMobile></NavItemMobile>
                    <NavItemMobile></NavItemMobile>
                    </div>
  )
}

export default MobileMenu