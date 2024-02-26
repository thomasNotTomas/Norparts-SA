import React from 'react'
import NavItem from './buttons/NavItem'

function Header () {
  return (
    <div className='h-fit w-full'>

        <div id='Logo and menu'
        className='flex justify-center md:justify-between place-items-center
                    py-12 px-12'>
            <img src="/norparts-sa-logo.svg" alt="Logo" className='w-80'/>
            <div className='hidden
                            rounded-xl py-2 px-4
                            bg-brand-700 
                            md:block md:flex space-x-6'>
                <NavItem icon="/icons/productIcon.png" name="Productos"></NavItem>
                <NavItem icon="/icons/serviceIcon.png" name="Servicios"></NavItem>
                <NavItem icon="/icons/contactIcon.png" name="Contacto"></NavItem>
            </div>
        </div>

    </div>
  )
}
 export default Header;