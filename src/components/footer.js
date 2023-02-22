import React from "react";

const Footer = ({ darkModeValue }) => {

    return (
        <div data-theme={darkModeValue}>
            <footer className="footer p-10 bg-neutral text-neutral-content">

                {console.log("Footer : " + darkModeValue)}
                <div>
                    <h1 className="" >Achraf KHABAR</h1>
                    <p>From here To there<br />2023</p>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <div className="grid grid-flow-col gap-4">
                        <a src='https://www.linkedin.com/in/achraf-khabar-bbba361a0/' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path fill="#0077B5" d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.5C0 22.8 1.2 24 2.7 24h18.5c1.5 0 2.7-1.2 2.7-2.7V2.7c0-1.5-1.2-2.7-2.7-2.7zM7.5 20.2h-3V9h3v11.2zm-1.5-12.8c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm13.5 12.8h-3v-5.9c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20h-3s.1-10.6 0-11.2h3v1.6c.4-.6 1.2-1.5 2.8-1.5 2 .1 3.5 1.3 3.5 4.2V20z" />
                        </svg></a>
                        <a src='https://www.instagram.com/ashrafkhabar2/'>
                            <img src="https://www.svgrepo.com/show/13639/instagram.svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"></img></a>
                        <a src='https://github.com/Ashraf-Khabar'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer; 