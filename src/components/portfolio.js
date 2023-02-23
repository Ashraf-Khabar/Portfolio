import React from "react";

const Portfolio = ({ darkModeValue }) => {

    return (
        <div data-theme={darkModeValue} class="w-full p-12">
            <div class="flex items-end justify-between mb-12 header">
                <div class="title text-center">
                    <p class="mb-4 text-4xl font-bold text-orange-600">
                        My PROJECTS
                    </p>
                </div>
            </div>
            {/*card 1 */}
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
                                    <br/>
                                        <div className="badge badge-accent badge-outline">Python</div>
                                        <div className="badge badge-secondary  badge-outline">Kivy</div>
                                        <div className="badge badge-accent badge-outline">KivyMD</div>
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
                                    <br/>
                                        <div className="badge badge-accent badge-outline">Nodejs</div>
                                        <div className="badge badge-secondary  badge-outline">Express js</div>
                                        <div className="badge badge-accent badge-outline">react js</div>
                                        <div className="badge badge-accent badge-outline">Sequelize</div>
                                        <div className="badge badge-accent badge-outline">MySQL</div>
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
                                    <br/>
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
                <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/StudentGradeManager" class="block w-full h-full">
                        <img alt="blog photo" src="https://innovativeeducation.com.bd/wp-content/uploads/2022/01/Laravel-9-Whats-New-features-in-Laravel-9.jpg" class="object-cover w-full max-h-40" />
                        <div class="w-full p-4 bg-white dark:bg-gray-800">
                            <p class="font-medium text-indigo-500 text-md">
                                StudentGradeManager
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
                                        <br/>
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
                <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/MoroccanCultureQuiz" class="block w-full h-full">
                        <img alt="blog photo" src="https://cdn.wccftech.com/wp-content/uploads/2015/09/javaAndroid.jpg" class="object-cover w-full max-h-40" />
                        <div class="w-full p-4 bg-white dark:bg-gray-800">
                            <p class="font-medium text-indigo-500 text-md">
                                MoroccanCultureQuiz
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
                                        <br/>
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

                {/*card 6 */}
                <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/StudentDocumentGenerator" class="block w-full h-full">
                        <img alt="blog photo" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ss0JQROE--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lorrhb1o88ctzseax3fe.png" class="object-cover w-full max-h-40" />
                        <div class="w-full p-4 bg-white dark:bg-gray-800">
                            <p class="font-medium text-indigo-500 text-md">
                                StudentDocumentGenerator
                            </p>
                            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                This app is a document generator for students in school. It takes an excel file as input and transforms it into an XML file. The app then uses XSL, DTD, XSD, and XQuery to generate various PDF docu…
                            </p>

                            <div class="flex items-center mt-4">

                                <div class="flex flex-col justify-between ml-4 text-sm">
                                    <p class="text-gray-800 dark:text-white">
                                        language/technologies
                                    </p>
                                    <p class="text-gray-400 dark:text-gray-300">
                                        <br/>
                                        <div className="badge badge-accent badge-outline">Python</div>
                                        <div className="badge badge-secondary  badge-outline">flask</div>
                                        <div className="badge badge-accent badge-outline">XML</div>
                                        <div className="badge badge-secondary  badge-outline">XSL</div>
                                        <div className="badge badge-accent badge-outline">DTD</div>
                                        <div className="badge badge-secondary  badge-outline">XSD</div>
                                        <div className="badge badge-accent badge-outline">XQuery</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/*card 7 */}
                
            </div>
        </div>
    )

}

export default Portfolio; 