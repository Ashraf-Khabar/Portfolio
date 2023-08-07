import React from "react";
import PlSQL from "../../docs/plsql_resume.pdf";
import LARAVEL from "../../docs/laravel-achraf-khabar.pdf";
import NEO from "../../docs/neo4j.pdf";
import BASICPYTHON from "../../docs/python.pdf";
import MONGODB from "../../docs/mongoDb.pdf";
import REACTJS from "../../docs/reactjs.pdf";
import CSHARP from "../../docs/csharp.pdf";
import VUEJS from "../../docs/vue.pdf";
import C_BEGINNER from "../../docs/C_problems.pdf";




const Resumes1 = ({ darkModeValue }) => {
    const handleResumeClickPLSQL = () => {
        // Replace the URL with the actual URL of your PDF file
        window.open(PlSQL, "_blank");
    };

    const handleCbegginers = () => {
        // Replace the URL with the actual URL of your PDF file
        window.open(C_BEGINNER, "_blank");
    };

    const handleResumeClickMongo = () => {
        // Replace the URL with the actual URL of your PDF file
        window.open(MONGODB, "_blank");
    };

    const handleResumeClickLARAVEL = () => {
        // Replace the URL with the actual URL of your PDF file
        window.open(LARAVEL, "_blank");
    };

    const handleResumeClickNEO = () => {
        // Replace the URL with the actual URL of your PDF file
        window.open(NEO, "_blank");
    };

    const handleResumeClickPYTHON = () => {
        // Replace the URL with the actual URL of your PDF file
        window.open(BASICPYTHON, "_blank");
    };

    const handleResumeClickREACT = () => {
        // Replace the URL with the actual URL of your PDF file
        window.open(REACTJS, "_blank");
    };
    const handleResumeClickCSHARP = () => {
        // Replace the URL with the actual URL of your PDF file
        window.open(CSHARP, "_blank");
    };
    const handleResumeClickVUEJS = () => {
        // Replace the URL with the actual URL of your PDF file
        window.open(VUEJS, "_blank");
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
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a onClick={handleCbegginers} className="block w-full h-full">
                        <img alt="blog photos" src="https://img.freepik.com/free-vector/botanical-font-letter-c_53876-89205.jpg?w=2000" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                C problems for begginers
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
                {/*card 1 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a onClick={handleResumeClickMongo} className="block w-full h-full">
                        <img alt="blog photos" src="data:image/png;base64,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" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                MongoDb
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
                {/*card 2 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a onClick={handleResumeClickNEO} className="block w-full h-full">
                        <img alt="blog photos" src="https://solutionsreview.com/data-management/files/2021/06/oie_vihDH1xRT9ON.jpg" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                Neo4j
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
                {/*card 3 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a onClick={handleResumeClickPLSQL} className="block w-full h-full">
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
                {/*card 4 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a onClick={handleResumeClickLARAVEL} className="block w-full h-full">
                        <img alt="blog photos" src="https://media.licdn.com/dms/image/C4D12AQGAKed5OprZmA/article-cover_image-shrink_600_2000/0/1642886183973?e=2147483647&v=beta&t=K0IwksboB7548ZLH04DgzifJswhfLERxkl_AXjD6wv0" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                LARAVEL
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
                {/*card 5 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a onClick={handleResumeClickPYTHON} className="block w-full h-full">
                        <img alt="blog photos" src="https://elearneresources.com/wp-content/uploads/2021/10/Python.jpg" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                BASICS OF PYTHON
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
                {/*card 6 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a onClick={handleResumeClickREACT} className="block w-full h-full">
                        <img alt="blog photos" src="https://wiki.tino.org/wp-content/uploads/2021/09/pasted-image-0.png" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                BASICS OF REACT JS
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
                {/*card 7 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a onClick={handleResumeClickCSHARP} className="block w-full h-full">
                        <img alt="blog photos" src="https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2021/03/2021_C9_top-level_programs_target-typed_Featured_article_image_A-01.png?itok=hN4XnLJr" className="object-cover w-full max-h-40" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                C#
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
                {/*card 8 */}
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a onClick={handleResumeClickVUEJS} className="block w-full h-full">
                        <img alt="blog photos" src="https://media.licdn.com/dms/image/D4D12AQEepkPdIsgF5w/article-cover_image-shrink_720_1280/0/1678120121360?e=2147483647&v=beta&t=ZIXUgRwWcqz23iaqNQypv0FVHH2OUIDq17N9d11tvC0" />
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <p className="font-medium text-indigo-500 text-md">
                                Vue JS
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