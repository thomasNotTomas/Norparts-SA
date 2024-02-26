import React from 'react'
import NavItemMobile from './buttons/NavItemMobile'

function MobileMenu() {
  return (
    <div className='fixed bottom-0 left-0
                    flex items-center justify-center
                    px-16 py-4
                    bg-brand-700
                    w-full
                    md:hidden'>
                    <div className='flex space-x-12'>
                    <NavItemMobile icon="/icons/productIcon.png" name="Productos"></NavItemMobile>
                    <NavItemMobile icon="/icons/serviceIcon.png" name="Servicios"></NavItemMobile>
                    <NavItemMobile icon="/icons/contactIcon.png" name="Contactos"></NavItemMobile>
                    </div>
                    </div>
  )
}

export default MobileMenu