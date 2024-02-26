import React from 'react'
import NavItem from './buttons/NavItem'

function Header () {
  return (
    <div className='h-fit w-full'>

        <div id='Logo and menu'
        className='flex justify-center place-items-center
                    py-12 px-12'>
            <img src="/norparts-sa-logo.svg" alt="Logo" className='w-80'/>
            <div className='hidden flex space-x-4'>
                <NavItem></NavItem>
                <NavItem></NavItem>
                <NavItem></NavItem>
            </div>
        </div>

    </div>
  )
}
 export default Header;