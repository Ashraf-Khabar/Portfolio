import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ darkModeValue }) => {

    return (

        <div data-theme={darkModeValue} class="w-full p-12">
            <div class="flex items-end justify-between mb-12 header">
                <div class="title">
                    <p class="mb-4 text-4xl font-bold text-orange-600">
                        SOME PROJECTS
                    </p>
                    <p class="text-2xl font-light text-gray-400">
                        All Projects are in Portfolio page
                    </p>
                </div>
                <div class="text-end">
                    <form class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                        <div class=" relative ">
                            <input type="text" id="&quot;form-subscribe-Search" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent" placeholder="Search" />
                        </div>
                        <button className="btn btn-outline btn-warning">Search</button>
                    </form>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
                <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/FuncPlot-PlottingFunctionsMadeEasy" class="block w-full h-full">
                        <img alt="blog photo" src="https://miro.medium.com/max/840/1*RJMxLdTHqVBSijKmOO5MAg.jpeg" class="object-cover w-full max-h-40" />
                        <div class="w-full p-4 bg-white dark:bg-gray-800">
                            <p class="font-medium text-indigo-500 text-md">
                                FuncPlot-PlottingFunctionsMadeEasy
                            </p>
                            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                FuncPlot is a user-friendly app built with Kivy and KivyMD that allows you to easily plot and visualize mathematical functions on your desktop or mobile device. With its intuitive interface and sup…
                            </p>

                            <div class="flex items-center mt-4">

                                <div class="flex flex-col justify-between ml-4 text-sm">
                                    <p class="text-gray-800 dark:text-white">
                                        languages/technologies
                                    </p>
                                    <p class="text-gray-400 dark:text-gray-300">
                                        Python - Kivy - KivyMD
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/*card 2*/}
                <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/ENSAT_Internship" class="block w-full h-full">
                        <img alt="blog photo" src="https://miro.medium.com/max/1400/1*CpDidbInbG4Er_0j_hknFQ.jpeg" class="object-cover w-full max-h-40" />
                        <div class="w-full p-4 bg-white dark:bg-gray-800">
                            <p class="font-medium text-indigo-500 text-md">
                                ENSAT_Internship
                            </p>
                            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                ENSAT_Internship est une application web développée en utilisant Node.js, React.js, Express.js, Sequelize et MySQL. Cette application a pour objectif de faciliter la recherche de stage pour les étu…
                            </p>

                            <div class="flex items-center mt-4">

                                <div class="flex flex-col justify-between ml-4 text-sm">
                                    <p class="text-gray-800 dark:text-white">
                                        languages/technologies
                                    </p>
                                    <p class="text-gray-400 dark:text-gray-300">
                                        Nodejs - Express js - react js - Sequelize - MySQL
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/*card 3 */}
                <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/Blogosss" class="block w-full h-full">
                        <img alt="blog photo" src="https://raw.githubusercontent.com/sumitc91/sumitc91.github.io/master/Blogs/23a73932-d77d-4bd4-b4ab-06ea4d5183d3_c-sharp-dotnet.jpg" class="object-cover w-full max-h-40" />
                        <div class="w-full p-4 bg-white dark:bg-gray-800">
                            <p class="font-medium text-indigo-500 text-md">
                                Blogosss
                            </p>
                            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                Blogosss is a web-based application for creating and sharing blogs, developed by Achraf Khabar using C#, ASP.NET, Entity Framework, HTML, CSS, and JavaScript. The application follows the Model-View…
                            </p>

                            <div class="flex items-center mt-4">

                                <div class="flex flex-col justify-between ml-4 text-sm">
                                    <p class="text-gray-800 dark:text-white">
                                        language/technologies
                                    </p>
                                    <p class="text-gray-400 dark:text-gray-300">
                                        C# - ASP.NET - SQLServer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="flex items-end justify-between mb-12 header">

                <div class="text-end">
                    <br /><br />
                    <Link to='/portfolio' className="btn btn-active btn-erro">See More</Link>
                </div>
            </div>
        </div>

    )
}

export default Cards; 