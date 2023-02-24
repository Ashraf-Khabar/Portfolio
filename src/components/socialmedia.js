import React from "react";

const SocialMedia = ({ darkModeValue }) => {
    return (
        <div
            data-theme="{darkModeValue}"
            className=" max-w-screen-xl p-4 px-4 mx-auto sm:px-6 lg:px-8 py-26 lg:mt-20"
        >
            <div className="flex relative p-4 justify-center items-center space-x-4">
                <a href="https://github.com/Ashraf-Khabar" className="">
                    <img
                        className="inline-block h-40 w-40 rounded-full object-cover ring-2 ring-white"
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="Guy"
                    />
                </a>
                <a href="https://www.linkedin.com/in/achraf-khabar-bbba361a0/" className="">
                    <img
                        className="inline-block h-40 w-40 rounded-full object-cover ring-2 ring-white"
                        src="https://cdn-icons-png.flaticon.com/512/179/179330.png"
                        alt="Max"
                    />
                </a>
                <a href="https://www.instagram.com/ashrafkhabar2/" className="">
                    <img
                        className="inline-block h-40 w-40 rounded-full object-cover ring-2 ring-white"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                        alt="Charles"
                    />
                </a>
            </div>
        </div>


    );
};

export default SocialMedia;
