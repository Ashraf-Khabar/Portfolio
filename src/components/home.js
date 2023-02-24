import React from "react";
import { Link } from "react-router-dom";

const Home = ({ darkModeValue }) => {

    return (
        <div className="artboard min-x-screen min-h-fit center-items">
            <div data-theme={darkModeValue} className="hero min-h-screen min-x-screen flex items-center justify-center">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://avatars.githubusercontent.com/u/95541956?s=400&u=907244470dd4e5d4a047be77216b928ccfdac6dc&v=4" />
                    <div>
                        <h1 className="text-5xl font-bold">Achraf KHABAR</h1>
                        <br/>
                        <p className="max-w-md  text-justify">
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
                        <br/>
                        <Link to='/about' className="btn btn-primary">See More</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home; 