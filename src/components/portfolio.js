import React from "react";

const Portfolio = ({ darkModeValue }) => {

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
                {/*card 2*/}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/ENSAT_Internship" className="block w-full h-full">
                        <img alt="blog photos" src="https://miro.medium.com/max/1400/1*CpDidbInbG4Er_0j_hknFQ.jpeg" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                ENSAT_Internship
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                ENSAT_Internship est une application web développée en utilisant Node.js, React.js, Express.js, Sequelize et MySQL. Cette application a pour objectif de faciliter la recherche de stage pour les étu…
                            </p>

                            <div className="flex items-center mt-4">

                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        languages/technologies
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <br />
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
                {/*card 6 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/StudentDocumentGenerator" className="block w-full h-full">
                        <img alt="blog photos" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ss0JQROE--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lorrhb1o88ctzseax3fe.png" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                StudentDocumentGenerator
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                This app is a document generator for students in school. It takes an excel file as input and transforms it into an XML file. The app then uses XSL, DTD, XSD, and XQuery to generate various PDF docu…
                            </p>

                            <div className="flex items-center mt-4">

                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        language/technologies
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <br />
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
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/Titanic-Survival-Prediction-Model" className="block w-full h-full">
                        <img alt="blog photos" src="https://miro.medium.com/max/1200/1*n4_NMnZmIhJ9Q9r4KDw1ew.png" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                Titanic-Survival-Prediction-Model
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                This project is a machine learning model that predicts the likelihood of survival for passengers on the Titanic based on various parameters such as age, gender, className, and fare. The model was built…
                            </p>

                            <div className="flex items-center mt-4">

                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        language/technologies
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <br />
                                        <div className="badge badge-accent badge-outline">Python</div>
                                        <div className="badge badge-secondary  badge-outline">Jupiter</div>
                                        <div className="badge badge-accent badge-outline">numpy</div>
                                        <div className="badge badge-secondary  badge-outline">seaborn</div>
                                        <div className="badge badge-accent badge-outline">matplotlib</div>
                                        <div className="badge badge-secondary  badge-outline">pandas</div>
                                        <div className="badge badge-accent badge-outline">scikit-learn</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )

}

export default Portfolio; 