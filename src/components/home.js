import React from "react";

const Home = ({ isChecked, setIsChecked, darkModeValue, setDarkModeValue }) => {

    return (
        <div >
            <section id='s1'>
                <div data-theme={darkModeValue} className="hero min-h-screen min-x-screen bg-base-200 flex items-center justify-center">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://avatars.githubusercontent.com/u/95541956?s=400&u=907244470dd4e5d4a047be77216b928ccfdac6dc&v=4" />
                        <div>
                            <h1 className="text-5xl font-bold">Achraf KHABAR</h1>
                            <p className="py-6">
                                As a Moroccan software engineering student, you have a keen interest in the world of IT and science, particularly in mathematics, web development, and problem-solving. You have experience working with various programming languages and web development frameworks, such as:

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
                <div className="stats shadow " data-theme={darkModeValue}>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </section>

        </div>
    )

}

export default Home; 