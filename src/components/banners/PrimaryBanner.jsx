import React from 'react'
import Icon from '../buttons/Icon'

function PrimaryBanner() {
  return (
    <div className='w-full flex justify-center text-center'>

        <div id='Text Container' className='px-3 space-y-12 max-w-[600px]'>

          <div id='Upper Content'
            className='font-semibold text-3xl text-secondary'>Desde 1984 brindando calidad y profesionalismo</div>

          <div id='Bottom Content'
            className='font-semibold text-xl space-y-12'>
            <div id='Paragraphs'
                 className='space-y-8 text-brand-900'>
              <p>Profesionales en repuestos y reparaciones para tu negocio.</p>
              <p>Especialistas en vehículos, motores, máquinas e instalaciones industriales</p>
            </div>

            <div id='Areas'
                 className='space-y-8'>
              <h1 className='text-brand-700 text-2xl'>Nuestras áreas</h1>
              <div id='Icons'
                 className='flex flex-wrap
                            justify-center items-center 
                            space-x-6'>
              <Icon></Icon>
              <Icon></Icon>
              <Icon></Icon>
              <Icon></Icon>
              <Icon></Icon>
              </div>  
            </div>

          </div>
        </div>

    </div>
  )
}

export default PrimaryBanner;
