import React from "react";

const Resumes1 = ({ darkModeValue }) => {
    const handleResumeClick = () => {
        // Replace the URL with the actual URL of your PDF file
        window.open("https://example.com/resume.pdf", "_blank");
    };


    return (
        <div data-theme={darkModeValue} className="w-full p-12">
            <div className="flex items-end justify-between mb-12 header">
                <div className="title text-center">
                    <p className="mb-4 text-4xl font-bold text-orange-600">
                        My RESUMES
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
                {/*card 1 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a onClick={handleResumeClick} className="block w-full h-full">
                        <img alt="blog photos" src="https://cdn.educba.com/academy/wp-content/uploads/2018/11/PLSQL-Interview-Questions.jpg" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                PL/SQL
                            </p>
                            <div className="flex items-center mt-4">
                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        FILES
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <br />
                                        <div className="badge badge-accent badge-outline">PDF</div>
                                        <div className="badge badge-secondary  badge-outline">MARKDOWN</div>
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

export default Resumes1;