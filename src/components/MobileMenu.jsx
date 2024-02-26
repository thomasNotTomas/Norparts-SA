import React from 'react'
import NavItemMobile from './buttons/NavItemMobile'

function MobileMenu() {
  return (
    <div className='fixed bottom-0 left-0
                    flex justify-between
                    px-16 py-4
                    bg-brand-700
                    w-full
                    md:hidden'>
                    <NavItemMobile icon="/icons/productIcon.png" name="Productos"></NavItemMobile>
                    <NavItemMobile icon="/icons/serviceIcon.png" name="Servicios"></NavItemMobile>
                    <NavItemMobile icon="/icons/contactIcon.png" name="Contactos"></NavItemMobile>
                    </div>
  )
}

export default MobileMenu