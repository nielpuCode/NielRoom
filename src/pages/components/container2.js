import React from 'react'

const container2 = () => {
    return (
        <div className='min-h-[100vh] flex flex-col items-center pb-40'>
            <div className="mt-40 mb-14 text-center">
                <h1 className='font-bold mx-4 text-2xl md:text-4xl'>ABOUT COMPANY</h1>
                <p className='text-gray-400 md:text-xl'>SOME HISTORY</p>
            </div>

            <div class="flex justify-center items-center flex-wrap md:w-5/6 mx-auto">
                <div class=" w-[95%] md:w-[55%] text-justify p-2">
                    <h2 className='font-bold'>- 1920</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quisquam corrupti et facere est voluptatem alias! Repellat odio dignissimos pariatur ducimus cum, laborum quibusdam molestias, cumque expedita magni quas corporis.</p>

                    <br/>

                    <h2 className='font-bold'>- 1986</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quisquam corrupti et facere est voluptatem alias! Repellat odio dignissimos pariatur ducimus cum, laborum quibusdam molestias, cumque expedita magni quas corporis.</p>

                    <button className='bg-theorange rounded-lg text-white px-10 mt-6 font-semibold text-2xl w-full md:w-auto'>MORE</button>
                </div>

                <div class="w-[80%] md:w-[40%]">
                    <img src="/laptop.png" alt="Laptop image" className='' />
                </div>
            </div> 
            
        </div>
    )
}

export default container2
