import React from "react";

const Error = () => {
    return (
        <div class="container z-10 flex items-center justify-between h-screen px-6 pt-32 mx-auto md:pt-0">
            <div class="container relative flex flex-col-reverse items-center justify-between px-6 mx-auto lg:flex-row">
                <div class="w-full mb-16 text-center md:mb-8 lg:text-left">
                    <h1 class="mt-12 font-sans text-5xl font-light text-center text-orange-500 lg:text-left lg:text-8xl md:mt-0">
                        Sorry, this page isn&#x27;t available
                    </h1>
                    <button class="px-2 py-2 mt-16 text-lg font-light transition duration-200 ease-in bg-yellow-300 border-2 border-gray-700 w-36 hover:bg-yellow-400 focus:outline-none">
                        Go back home
                    </button>
                </div>
                <div class="relative block w-full max-w-md mx-auto md:mt-0 lg:max-w-2xl">
                    <img src="https://cdn-icons-png.flaticon.com/512/7465/7465751.png" alt="imaging" />
                </div>
            </div>
        </div>
    )
}

export default Error; 