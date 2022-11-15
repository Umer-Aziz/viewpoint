import React from 'react'
import { WiTime8 } from "react-icons/wi"
const Category = () => {
  return (
    <>
        <main className='container'>
            <div className='pt-12 pb-20'>
            
              {/* All blogs */}
            <div className='grid gap-y-6 md:grid-cols-2 lg:grid-cols-3 gap-x-6'>

            <div className='py-3 shadow rounded group cursor-pointer'>
            <div className='overflow-hidden w-full rounded md:rounded-md'>
            <img className='bg-cover md:h-56 xl:h-64 object-fill rounded lg:rounded-md w-full group-hover:scale-105 transition-all 
            duration-500' 
            src="https://media.istockphoto.com/id/1402667894/es/foto/pantalla-de-conferencia-de-energ%C3%ADa.jpg?s=612x612&w=0&k=20&c=if8B0E4TJ1ohnU-yZKGXosQfx2ctOh7JTWllo6VxWkc=" alt="blog-posts" />
            </div>
            <div className='px-3 lg:px-4'>
            <p className="mt-2 lg:mt-3 text-sm text-orange-600 font-semibold">Technology</p>
            <h3 className="my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
            <p className='hidden xl:block my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fuga unde neque nihil ratione cumque eveniet distinctio nulla</p>
            <p className="lg:mt-2 flex items-center gap-x-1 text-gray-500">
                <WiTime8 className="text-sm" />
                <span className="text-sm font-semibold">
                12 November, 2022
                </span>
            </p>
            </div>
            </div>

            <div className='py-3 shadow rounded group cursor-pointer'>
            <div className='overflow-hidden w-full rounded md:rounded-md'>
            <img className='bg-cover md:h-56 xl:h-64 object-fill rounded lg:rounded-md w-full group-hover:scale-105 transition-all 
            duration-500' 
            src="https://media.istockphoto.com/id/854321536/es/foto/mira-este-vestido-magn%C3%ADfico.jpg?s=612x612&w=0&k=20&c=6Nh1enezE-wNc-GXA3ADbKHH7AiVSYZFmCjXu84q_tw=" alt="blog-posts" />
            </div>
            <div className='px-3 lg:px-4'>
            <p className="mt-2 lg:mt-3 text-sm text-orange-600 font-semibold">LifeStyle</p>
            <h3 className="my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
            <p className='hidden xl:block my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fuga unde neque nihil ratione cumque eveniet distinctio nulla</p>
            <p className="lg:mt-2 flex items-center gap-x-1 text-gray-500">
                <WiTime8 className="text-sm" />
                <span className="text-sm font-semibold">
                12 November, 2022
                </span>
            </p>
            </div>
            </div>

            <div className='py-3 shadow rounded group cursor-pointer'>
            <div className='overflow-hidden w-full rounded md:rounded-md'>
            <img className='md:h-56 xl:h-64 bg-cover object-fill rounded lg:rounded-md w-full group-hover:scale-105 transition-all 
            duration-500' 
            src="https://media.istockphoto.com/id/155596905/es/foto/mujer-ropa-de-alta-categor%C3%ADa.jpg?s=612x612&w=0&k=20&c=AOusb6rXetcs-beZ9IK70-cCOUQccT-rupOqFhjlCTg=" alt="blog-posts" />
            </div>
            <div className='px-3 lg:px-4'>
            <p className="mt-2 lg:mt-3 text-sm text-orange-600 font-semibold">LifeStyle</p>
            <h3 className="my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
            <p className='hidden xl:block my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fuga unde neque nihil ratione cumque eveniet distinctio nulla</p>
            <p className="lg:mt-2 flex items-center gap-x-1 text-gray-500">
                <WiTime8 className="text-sm" />
                <span className="text-sm font-semibold">
                12 November, 2022
                </span>
            </p>
            </div>
            </div>

            <div className='py-3 shadow rounded group cursor-pointer'>
            <div className='overflow-hidden w-full rounded md:rounded-md'>
            <img className='md:h-56 xl:h-64 bg-cover object-fill rounded lg:rounded-md w-full group-hover:scale-105 transition-all 
            duration-500' 
            src="https://media.istockphoto.com/id/1391824262/es/foto/concepto-de-estafa-telef%C3%B3nica-fraude-o-phishing.jpg?s=612x612&w=0&k=20&c=aleAmEbRPyG4WfQ10cm75k1XfahtgSFiq8bcdhv4pVA=" alt="blog-posts" />
            </div>
            <div className='px-3 lg:px-4'>
            <p className="mt-2 lg:mt-3 text-sm text-orange-600 font-semibold">Scamming</p>
            <h3 className="my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
            <p className='hidden xl:block my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fuga unde neque nihil ratione cumque eveniet distinctio nulla</p>
            <p className="lg:mt-2 flex items-center gap-x-1 text-gray-500">
                <WiTime8 className="text-sm" />
                <span className="text-sm font-semibold">
                12 November, 2022
                </span>
            </p>
            </div>
            </div>

            </div>
            
            </div>
        </main>
    </>
  )
}

export default Category