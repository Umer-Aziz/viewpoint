import React from 'react'

const HeroBottom = () => {
  return (
   <>
    <div className='container text-gray-600 dark:text-gray-300'>

        <div className='py-6 md:py-10 border-b border-gray-600 border-opacity-10 dark:border-opacity-30'>
            <h3 className='px-3 py-1 text-gray-400 text-lg font-semibold border-l-2 border-orange-700 uppercase'>must read</h3>
            <div className='my-3 grid gap-y-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-4 md:gap-x-6'>

            <div className='flex gap-x-4 p-3 shadow-md rounded group cursor-pointer'>
            <div className='w-40 overflow-hidden'>
                <img className='h-28 bg-cover object-fill rounded-md group-hover:scale-105 transition-all duration-300' src="https://media.istockphoto.com/id/1366475343/es/foto/c%C3%B3digo-de-programa-abstracto-en-la-pantalla-digital.jpg?s=612x612&w=0&k=20&c=e2YG0TGxvGiM2TKIJXC6OePeQ20tFDI81mW18Wz7BVQ=" alt="programming-post" />
            </div>
                <div>
                    <p className='mt-2 text-sm text-orange-600 font-semibold'>Programming</p>
                    <h4 className='mt-1 text-lg font-semibold blog-title'>Lorem ipsum dolor sit amet consectetur.</h4>
                    <a href="/" className='text-xs font-semibold text-orange-700 group-hover:text-orange-800'>Read More</a>
                </div>
            </div>

            <div className='flex gap-x-4 p-3 shadow-md rounded group cursor-pointer'>
            <div className='w-40 overflow-hidden'>
                <img className='h-28 bg-cover object-fill rounded-md
                 group-hover:scale-105 transition-all duration-300' 
                 src="https://media.istockphoto.com/id/1363276509/es/foto/maestra-dando-conferencias-de-ciencias-de-la-computaci%C3%B3n-a-diversos-grupos-multi%C3%A9tnicos-de.jpg?s=612x612&w=0&k=20&c=c8yFDf_yUJiC_qsRNBAo_kppLhY9RT5nXpcpcnhHGlM=" alt="programming-post" />
            </div>
                <div>
                    <p className='mt-2 text-sm text-orange-600 font-semibold'>Programming</p>
                    <h4 className='mt-1 text-lg font-semibold blog-title'>Lorem ipsum dolor sit amet consectetur.</h4>
                    <a href="/" className='text-xs font-semibold text-orange-700 group-hover:text-orange-800'>Read More</a>
                </div>
            </div>

            <div className='flex gap-x-4 p-3 shadow-md rounded group cursor-pointer'>
            <div className='w-40 overflow-hidden'>
                <img className='h-28 bg-cover object-fill rounded-md group-hover:scale-105 transition-all duration-300'
                 src="https://media.istockphoto.com/id/1147195672/es/foto/codificaci%C3%B3n-de-desarrolladores-enfocada-en-monitores-de-computadora-que-trabajan-hasta-tarde.jpg?s=612x612&w=0&k=20&c=amtjVgPNE62qfL3_EMFGCgmoiGJRO8D0tRLrv9zXSVo=" alt="programming-post" />
            </div>
                <div>
                    <p className='mt-2 text-sm text-orange-600 font-semibold'>Programming</p>
                    <h4 className='mt-1 text-lg font-semibold blog-title'>Lorem ipsum dolor sit amet consectetur.</h4>
                    <a href="/" className='text-xs font-semibold text-orange-700 group-hover:text-orange-800'>Read More</a>
                </div>
            </div>


            </div>
        </div>
    </div>
   </>
  )
}

export default HeroBottom