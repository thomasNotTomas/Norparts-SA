import React from 'react'
import Icon from '../buttons/Icon'

function PrimaryBanner() {
  return (
    <div className='w-full flex justify-center'>

        <div id='Text Container' className='
                                            px-3 space-y-12 max-w-[600px] md:max-w-[1200px]'>

          <div id='Upper Content'
            className='font-semibold text-3xl text-secondary text-center'>Desde 1984 brindando calidad y profesionalismo</div>

          <div id='Bottom Content'
            className=' flex flex-col justify-center items-center
                        font-semibold text-xl space-y-12 
                        md:space-x-12 md:flex-row'>
            <div id='Paragraphs'
                 className='space-y-8 text-brand-900 text-center max-w-sm
                            md:text-2xl'>
              <p>Profesionales en repuestos y reparaciones para tu negocio.</p>
              <p>Especialistas en vehículos, motores, máquinas e instalaciones industriales</p>
            </div>

            <div id='Areas'
                 className='space-y-8 text-center'>
              <h1 className='text-brand-700 text-2xl'>Nuestras áreas</h1>
              <div id='Icons'
                 className='flex flex-wrap
                            justify-center items-center 
                            space-x-8 max-w-md'>
              <Icon icon="/icons/agroIcon.png" 
                    area="Agro"></Icon>
              <Icon icon="/icons/transportIcon.png" 
                    area="Transporte"></Icon>
              <Icon icon="/icons/portIcon.png" 
                    area="Terminales Portuarias"></Icon>
              <Icon icon="/icons/constructionIcon.png" 
                    area="Construcción"></Icon>
              <Icon icon="/icons/IndustryIcon.png" 
                    area="Industria"></Icon>
              </div>  
            </div>

          </div>
        </div>

    </div>
  )
}

export default PrimaryBanner;
