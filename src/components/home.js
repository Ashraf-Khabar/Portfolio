import React from "react";

const Home = ({darkModeValue}) => {

    return (
        <div >
            <section id='s1'>
                <div data-theme={darkModeValue} className="hero min-h-screen min-x-screen flex items-center justify-center">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://avatars.githubusercontent.com/u/95541956?s=400&u=907244470dd4e5d4a047be77216b928ccfdac6dc&v=4" />
                        <div>
                            <h1 className="text-5xl font-bold">Achraf KHABAR</h1>
                            <p className="py-6">
                                As a Moroccan software engineering student, I have a keen interest in the world of IT and science, particularly in mathematics, web development, and problem-solving. You have experience working with various programming languages and web development frameworks, such as:

                                C/C++ using SDL2 for game development
                                Java using Android Studio for Android app development
                                Python and various libraries such as NumPy, pandas, Matplotlib, SciPy, TensorFlow, and Seaborn for data science and machine learning projects
                                Front-end web development using HTML/CSS, JavaScript, React, Vue.js, and TypeScript
                                Back-end web development using PHP with Laravel 8/9, Node.js with Express.js and Next.js, Django with Flask, and C# with ASP.NET
                                Database management using MySQL and its procedural language, ORACLE and its procedural language PL/SQL, Postgres and its procedural language, and NoSQL databases like MongoDB, neo4j, and Cassandra
                                Markup languages and technologies like XML, XSL, XSD, DTD, and XQUERY
                                Apart from your technical skills, you are also proficient in problem-solving, graphic design, and have a deep interest in history, philosophy, and mathematics.

                                You have participated in various extracurricular activities during your time at ENSA Tanger, where you have held leadership positions in several clubs, such as:

                                Formateur and Responsable de la formation de la programmation web backend in the Club CSC ENSA Tanger (Computer Science Club)
                                Responsable du design (design lead) in the Club 2C (Cultural Club) at ENSA Tanger
                                Responsable de design (design lead) in the Club JLM at ENSA Tanger
                                Responsable de design (design lead) in the IT DAY (IT event) at ENSA Tanger.

                            </p>
                            <button className="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div data-theme={darkModeValue} className="artboard min-x-screen min-h-fit items-center justify-center flex">
                    <div className="stats shadow">

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title">Development skills</div>
                            <div className="stat-value text-primary">60 %</div>
                            <div className="stat-desc">Skills in Programming languages such as C/C++, java, python, php, java script</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Data Science - machine learning</div>
                            <div className="stat-value text-secondary">30 %</div>
                            <div className="stat-desc">Data science, data analysis, bigness intelligence, data base management, cloud computing ...</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-sky-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Marketing and management</div>
                            <div className="stat-value text-sky-600">10 %</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div data-theme={darkModeValue} className="artboard min-x-screen min-h-screen items-center justify-center flex">
                    <div className="mx-auto grid  gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://uploads-ssl.webflow.com/60ec34540d013784844d2ee2/61d42d538aec6733243470a7_Python-logo.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">FuncPlot-PlottingFunctionsMadeEasy</h2>
                                <p>FuncPlot is a user-friendly app built with Kivy and KivyMD that allows you to easily plot and visualize mathematical functions on your desktop or mobile device. With its intuitive interface and sup…</p>
                                <div className="card-actions justify-end">
                                    <a href="https://github.com/Ashraf-Khabar/FuncPlot-PlottingFunctionsMadeEasy" className="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://www.oxygenxml.com/img/ls_xslt_transform.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">StudentDocumentGenerator</h2>
                                <p>This app is a document generator for students in school. It takes an excel file as input and transforms it into an XML file. The app then uses XSL, DTD, XSD, and XQuery to generate various PDF docu…</p>
                                <div className="card-actions justify-end">
                                    <a href="https://github.com/Ashraf-Khabar/StudentDocumentGenerator" className="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img  src="https://miro.medium.com/max/1400/1*hJ1tgnNp8MBBjBFPQwFENw.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">ENSAT_Internship</h2>
                                <p>ENSAT_Internship est une application web développée en utilisant Node.js, React.js, Express.js, Sequelize et MySQL. Cette application a pour objectif de faciliter la recherche de stage pour les étu…</p>
                                <div className="card-actions justify-end">
                                    <a href="https://github.com/Ashraf-Khabar/ENSAT_Internship" className="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://miro.medium.com/max/680/0*whPt9R9BXJ5xotoh.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Blogosss</h2>
                                <p>Blogosss is a web-based application for creating and sharing blogs, developed by Achraf Khabar using C#, ASP.NET, Entity Framework, HTML, CSS, and JavaScript. The application follows the Model-View…</p>
                                <div className="card-actions justify-end">
                                    <a href='https://github.com/Ashraf-Khabar/Blogosss' className="btn btn-primary">See more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )

}

export default Home; 