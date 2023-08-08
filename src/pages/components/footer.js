import React from 'react'

const footer = () => {
    return (
        <footer class="flex justify-between min-h-[22vh] p-5 px-1 bg-thedark text-thewhite flex-wrap">
            <div class="max-w-[700px] flex flex-col justify-center m-4 text-justify">
                <h1 class="font-bold">Mr. GAPONOV</h1>
                <p class="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem dicta reprehenderit iusto molestias, recusandae quasi id aliquid libero, necessitatibus deleniti hic amet asperiores maiores minima numquam voluptate, nemo rerum modi?</p>
            </div>

            <div class="max-w-[200px] m-4">
                <h1 class="font-bold">USEFUL LINKS</h1>
                <p class="text-xs">Vacancy</p>
                <p class="text-xs">Contact</p>
                <p class="text-xs">Gallery</p>
            </div>

            <div class="m-4">
                <h1 class="font-bold">CONTACT</h1>
                <p class="text-xs"><span>Address:</span> pr-t Tekstilshikov. d. 17, office 3</p>
                <p class="text-xs"><span>Number:</span> 8 (800) 987-65-43</p>
                <p class="text-xs"><span>E-mail:</span> Interior_life@yandex.ru</p>
            </div>
        </footer>

    )
}

export default footer
