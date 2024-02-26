import React from "react"

function NavItem( {icon , name}  ) {
    
    return (

        <div className='flex rounded-xl text-xl
                        py-2 px-4 space-x-4
                        hover:bg-brand-900
                        cursor-pointer
                        transition-all ease-in-out 1000ms'>
         <img src={icon} alt="Icon" className="w-6" />
         <h4 className="text-base md:text-lg font-semibold"> {name} </h4>
        </div>

    )
}

export default NavItem