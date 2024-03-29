import React from "react";
import { Link } from "react-router-dom";

const Portfolio2 = ({ darkModeValue }) => {

    return (
        <div data-theme={darkModeValue} className="w-full p-12">
            <div className="flex items-end justify-between mb-12 header">
                <div className="title text-center">
                    <p className="mb-4 text-4xl font-bold text-orange-600">
                        My PROJECTS
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
                {/*card 1 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/aissameXyz/student_attendance_management_system_ENSAT" className="block w-full h-full">
                        <img alt="blog photos" src="https://programacion.net/files/article/20171004121027_laravel.jpg" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                Hodouri
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                This project is part of a group project by the students of the National School Of Applied Sciences At Tangier Morocco.
                                This project aims to Automize the process of marking the presence of students in the school classes.
                            </p>

                            <div className="flex items-center mt-4">

                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        languages/technologies
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <br />
                                        <div className="badge badge-accent badge-outline">Laravel 9</div>
                                        <div className="badge badge-secondary  badge-outline">JavaScript</div>
                                        <div className="badge badge-accent badge-outline">CSS Tailwind</div>
                                        <div className="badge badge-secondary badge-outline">PHP</div>
                                        <div className="badge badge-accent badge-outline">MySql</div>


                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/*card 2 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/FuncPlot-PlottingFunctionsMadeEasy" className="block w-full h-full">
                        <img alt="blog photos" src="https://miro.medium.com/max/840/1*RJMxLdTHqVBSijKmOO5MAg.jpeg" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                FuncPlot-PlottingFunctionsMadeEasy
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                FuncPlot is a user-friendly app built with Kivy and KivyMD that allows you to easily plot and visualize mathematical functions on your desktop or mobile device. With its intuitive interface and sup…
                            </p>

                            <div className="flex items-center mt-4">

                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        languages/technologies
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <br />
                                        <div className="badge badge-accent badge-outline">Python</div>
                                        <div className="badge badge-secondary  badge-outline">Kivy</div>
                                        <div className="badge badge-accent badge-outline">KivyMD</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/*card 3 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/Blogosss" className="block w-full h-full">
                        <img alt="blog photos" src="https://raw.githubusercontent.com/sumitc91/sumitc91.github.io/master/Blogs/23a73932-d77d-4bd4-b4ab-06ea4d5183d3_c-sharp-dotnet.jpg" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                Blogosss
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                Blogosss is a web-based application for creating and sharing blogs, developed by Achraf Khabar using C#, ASP.NET, Entity Framework, HTML, CSS, and JavaScript. The application follows the Model-View…
                            </p>

                            <div className="flex items-center mt-4">

                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        language/technologies
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <br />
                                        <div className="badge badge-accent badge-outline">C#</div>
                                        <div className="badge badge-secondary  badge-outline">ASP.NET</div>
                                        <div className="badge badge-accent badge-outline">SQLServer</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/*card 4 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/StudentGradeManager" className="block w-full h-full">
                        <img alt="blog photos" src="https://innovativeeducation.com.bd/wp-content/uploads/2022/01/Laravel-9-Whats-New-features-in-Laravel-9.jpg" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                StudentGradeManager
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                StudentGradeManager is a web application that allows for easy management of student grades by modules, subjects, and teachers. Built with Laravel and Oracle DB, this app allows teachers to view the…
                            </p>
                            <div className="flex items-center mt-4">

                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        language/technologies
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <br />
                                        <div className="badge badge-accent badge-outline">PHP</div>
                                        <div className="badge badge-secondary  badge-outline">Laravel9</div>
                                        <div className="badge badge-accent badge-outline">Oracle Db 21c</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/*card 5 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/MoroccanCultureQuiz" className="block w-full h-full">
                        <img alt="blog photos" src="https://cdn.wccftech.com/wp-content/uploads/2015/09/javaAndroid.jpg" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                MoroccanCultureQuiz
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                A mobile app built using Java and XML that offers a fun and educational way to learn about Moroccan history through a series of quizzes. The app displays the user's score at the end of each quiz an…
                            </p>

                            <div className="flex items-center mt-4">

                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        language/technologies
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <br />
                                        <div className="badge badge-accent badge-outline">java</div>
                                        <div className="badge badge-secondary  badge-outline">xml</div>
                                        <div className="badge badge-accent badge-outline">android studio</div>
                                        <div className="badge badge-secondary  badge-outline">gradel</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <br /><br /><br /><br />
            <center>

                <nav aria-label="Page navigation example">
                    <ul class="inline-flex items-center -space-x-px">
                        <li>
                            <Link to='/portfolio' class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Previous</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            </Link>
                        </li>
                        <li>
                            <Link to='/portfolio' class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</Link>
                        </li>
                        <li>
                            <Link to='/portfolio/2' aria-current="page" class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">2</Link>
                        </li>
                        <li>
                            <Link to='/portfolio/2' class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Next</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </center>

        </div>
    )
}

export default Portfolio2;

