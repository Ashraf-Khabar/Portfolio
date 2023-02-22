import React from "react";

const Stat = ({darkModeValue}) => {

    return (
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
    )

}

export default Stat; 