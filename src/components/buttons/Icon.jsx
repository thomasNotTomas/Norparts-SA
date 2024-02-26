import React from "react"

function Icon( {icon, area} ) {
    
    return (

        <div className="flex flex-col items-center h-52">
            <div className='flex rounded-full justify-center items-center w-24 h-24 my-4 bg-brand-700'>
                <img src={icon} alt="" />
            </div>
            <h3 className="text-brand-700 text-center max-w-[100px]">{area}</h3>
        </div>
    )
}

export default Icon