import React from "react";

const Cards = ({darkModeValue}) => {

    return (
        <div data-theme={darkModeValue} className="artboard min-x-screen min-h-fit center-items">
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
                    <figure><img src="https://miro.medium.com/max/1400/1*hJ1tgnNp8MBBjBFPQwFENw.png" alt="Shoes" /></figure>
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
    )
}

export default Cards; 