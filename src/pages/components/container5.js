import React from 'react'

const container5 = () => {
    return (
        <div class="thepage5 min-h-[80vh] w-full bg-gray-100 flex flex-col justify-center items-center p-8">
            <div class="title mb-8 text-center">
                <h1 class="font-bold text-lg md:text-xl">SIGN UP FOR COMPANY NEWS</h1>
                <p class="text-gray-500 text-sm md:text-base">YOU WILL RECEIVE NOTIFICATIONS ABOUT NEW COMPANY NEWS</p>
            </div>

            <form class="flex flex-wrap justify-center">
                <input type="text" placeholder="E-mail" class="w-full md:w-96 px-2 py-1 rounded-lg my-2 md:m-0" />
                <button class="bg-theorange px-4 py-1 rounded-lg text-white m-2 md:m-0">SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default container5
