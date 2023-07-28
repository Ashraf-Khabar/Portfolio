import React from "react";
import { Link } from "react-router-dom";

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
                    <a href="https://github.com/Ashraf-Khabar/FLASKOSQL" className="block w-full h-full">
                        <img alt="blog photos" src="https://blog.kakaocdn.net/dn/zmBmh/btrfREPXUNv/Jd4nKONiHm69N2z0pZKD21/img.jpg" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                FLASKOSQL
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                FLASKOS is a ORM for Oracle db and FLASK API, it provides a simple manupilation of database and simple mapiing to simplify interaction with relational database .
                                This ORM is for optimazation and security of databases .
                            </p>

                            <div className="flex items-center mt-4">

                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        languages/technologies
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <br />
                                        <div className="badge badge-accent badge-outline">Python</div>
                                        <div className="badge badge-secondary  badge-outline">ORACLE</div>
                                        <div className="badge badge-accent badge-outline">PYPI</div>
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
                    <a href="https://github.com/Ashraf-Khabar/Licence-plate-recognition" className="block w-full h-full">
                        <img alt="blog photos" src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/02/og-Number-Plate-Detection.png" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                Licence plate recognition using CNN
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                About The realization of a radar system for the detection of vehicle license plates is an innovative and ambitious technological project that aims to improve road safety and facilitate the identification of vehicles in traffic
                            </p>

                            <div className="flex items-center mt-4">

                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        language/technologies
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <br />
                                        <div className="badge badge-accent badge-outline">Python</div>
                                        <div className="badge badge-secondary  badge-outline">Flask</div>
                                        <div className="badge badge-accent badge-outline">SQL</div>
                                        <div className="badge badge-secondary  badge-outline">API</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/*card 4 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/bank-marketing-data-analysis" className="block w-full h-full">
                        <img alt="blog photos" src="https://successive.cloud/wp-content/uploads/2022/04/Data-Analytics-Benefits.png" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                bank marketing data analysis
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                The goal is to build a predictive model that can help identify potential customers who are more likely to subscribe to a bank's term deposit.                            </p>
                            <div className="flex items-center mt-4">
                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        language/technologies
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <br />
                                        <div className="badge badge-accent badge-outline">python</div>
                                        <div className="badge badge-secondary  badge-outline">PyTorch</div>
                                        <div className="badge badge-secondary  badge-outline">numpy</div>
                                        <div className="badge badge-accent badge-outline">pandas</div>
                                        <div className="badge badge-secondary  badge-outline">scikit-learn</div>
                                        <div className="badge badge-accent badge-outline">machine learning</div>
                                        <div className="badge badge-accent badge-outline">Deeo learning</div>
                                        <div className="badge badge-secondary  badge-outline">Feed Forward Neural Network</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/*card 5 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/Sport-Detection-And-Video-Processing" className="block w-full h-full">
                        <img alt="blog photos" src="https://www.analyticsinsight.net/wp-content/uploads/2020/12/ML-for-Sports-1024x576.jpg" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                Sport Detection And Video Processing
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                This project aims to create a deep learning model for extracting items from a sports video and accurately detecting the type of sport featured in the video. We use in this project Pytorch framwork .
                            </p>
                            <div className="flex items-center mt-4">

                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        language/technologies
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <br />
                                        <div className="badge badge-accent badge-outline">Python</div>
                                        <div className="badge badge-secondary  badge-outline">Deep Learning</div>
                                        <div className="badge badge-accent badge-outline">Pytorch</div>
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
                                Machine learning model that predicts the likelihood of survival for passengers on the Titanic based on various parameters such as age, gender, className, and fare.
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
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/SmartSpender" className="block w-full h-full">
                        <img alt="blog photos" src="https://binaryinformatics.com/wp-content/uploads/2022/09/MERN-Stack-Development-and-Consulting-Services.jpg" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                TimeSpender
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                Smart Spender is a web application designed to help users manage and organize their money in order to avoid financial issues.
                            </p>

                            <div className="flex items-center mt-4">

                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        language/technologies
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <br />
                                        <div className="badge badge-accent badge-outline">Mongodb ATLAS</div>
                                        <div className="badge badge-secondary  badge-outline">React JS</div>
                                        <div className="badge badge-accent badge-outline">Express JS</div>
                                        <div className="badge badge-accent badge-outline">Node JS</div>
                                        <div className="badge badge-accent badge-outline">Mongoose ORM</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/**card 9 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="https://github.com/Ashraf-Khabar/MicroFramework" className="block w-full h-full">
                        <img alt="blog photos" src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/907886/retina_1708x683_cover-0219-The10MistakesC-Waldek_img-343f93efd75d26a7d857e374cd8630fd.png" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                MicroFramework of C#
                            </p>
                            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                MicroFramework is a C# DLL that provides a lightweight framework for working with models and database connections.
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
                                        <div className="badge badge-accent badge-outline">XML</div>
                                        <div className="badge badge-secondary  badge-outline">MySql</div>
                                        <div className="badge badge-accent badge-outline">SqlServer</div>

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
                            <Link to='/portfolio' aria-current="page" class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</Link>
                        </li>
                        <li>
                            <Link to='/portfolio/2' class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</Link>
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

export default Portfolio; 