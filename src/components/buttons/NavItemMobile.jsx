import React from "react"

function NavItemMobile( { icon, name } ) {
    
    return (

        <div className="flex flex-col items-center w-fit">
            <img src={icon} alt="Icon" className='w-8' />
            <h4 className="font-semibold"> {name} </h4>
        </div>

    )
}

export default NavItemMobile