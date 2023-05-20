const FlaskoSQL = ({ darkModeValue }) => {
    return (
        <div className="artboard min-x-screen min-h-fit center-items">
            <div data-theme={darkModeValue} className="min-h-screen min-x-screen">
                <div className="container mx-auto p-6">
                    <h1 className="text-3xl font-bold mb-4">FlaskoSQL</h1>
                    <center>
                        <a href='https://github.com/Ashraf-Khabar/FLASKOSQL' title="Source code ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="fill-current">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <strong>Code Source in GITHUB</strong>
                        <br></br>
                        <br></br>
                        <a href="https://pypi.org/project/flaskosql" title="PyPI Package">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 512 512">
                                <title>ionicons-v5_logos</title>
                                <path d="M314,36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09,311.09,0,0,0-51.66,4.38c-45.74,8-54.07,24.7-54.07,55.54V128H256v16H107.62C66.06,144,32.33,193.67,32,255.12c0,.29,0,.58,0,.88a162.91,162.91,0,0,0,3.13,32c9.29,46.28,38.23,80,72.49,80H128V314c0-31.3,20.84-59.95,55-66.1l9.87-1.23H314a56.05,56.05,0,0,0,15.06-2A52.48,52.48,0,0,0,368,193.68V91.92C368,63,343.32,41.19,314,36.38ZM194.93,105.5a20.37,20.37,0,1,1,20.3-20.3A20.29,20.29,0,0,1,194.93,105.5Z" fill="red"></path><path d="M475.28,217c-10.7-42.61-38.41-73-70.9-73H386.67v47.45c0,39.57-26,68.22-57.74,73.13a63.54,63.54,0,0,1-9.69.75H198.08a60,60,0,0,0-15.23,1.95C160.54,273.14,144,291.7,144,315.77V417.54c0,29,29.14,46,57.73,54.31,34.21,9.95,71.48,11.75,112.42,0,27.19-7.77,53.85-23.48,53.85-54.31V384H256V368H404.38c29.44,0,54.95-24.93,67.45-61.31A156.83,156.83,0,0,0,480,256,160.64,160.64,0,0,0,475.28,217ZM316.51,404a20.37,20.37,0,1,1-20.3,20.3A20.29,20.29,0,0,1,316.51,404Z" fill="red">
                                </path>
                            </svg>
                        </a>
                        <strong>Package in PYPI</strong>
                        <br></br>
                        <br></br>
                    </center>
                    <p><strong>Description</strong></p>
                    <p className="mb-4">The Package Name is a Python package that provides an Object-Relational Mapping (ORM) solution for Oracle databases, specifically designed for use in Flask APIs. It simplifies the interaction with an Oracle database by providing an intuitive interface for querying, inserting, updating, and deleting data.</p>

                    <p><strong>Features</strong></p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Easy integration with Flask: Seamlessly integrate the ORM into your Flask application for database operations.</li>
                        <li>Simplified querying: Perform complex queries using an expressive API, allowing you to focus on your application logic rather than database intricacies.</li>
                        <li>Model-based approach: Define your database schema using Python classes, reducing the need for manual SQL queries and keeping your code organized.</li>
                        <li>Transaction support: Manage database transactions easily, ensuring data consistency and integrity.</li>
                    </ul>

                    <p><strong>Installation</strong></p>
                    <p className="mb-4">You can install the Package Name package using pip:</p>

                    <div className="mockup-code">
                        <pre>
                            <code>
                                pip install flaskosql
                            </code>
                        </pre>
                    </div>

                    <p><strong>Usage</strong></p>
                    <ol className="list-decimal list-inside mb-4">
                        <li>
                            <p>Import the necessary classes and functions from the package:</p>
                            <div className="mockup-code">
                                <pre>
                                    <code>
                                        from flaskosql.db import Connect<br />
                                    </code>
                                </pre>
                                <pre>
                                    <code>
                                        from flaskosql.field import Field<br />
                                    </code>
                                </pre>
                                <pre>
                                    <code>
                                        from flaskosql.moel import Model

                                    </code>
                                </pre>
                            </div>
                        </li>

                        <li>
                            <p>Create a model class that represents a table in your Oracle database. Define the table schema using the <code>Field</code> class:</p>
                            <div className="mockup-code">
                                <pre>
                                    <code>
                                        from flaskosql.model import Model<br />
                                        &nbsp;&nbsp;from flaskosql.field import Field<br /><br />
                                        &nbsp;&nbsp;class Roles(Model):<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;ID = Field("id", "NUMBER", primary_key=True)<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;NAME = Field("name", "VARCHAR2(100)", nullable=False)
                                    </code>
                                </pre>
                            </div>
                        </li>
                        <li>
                            <p>Initialize the database connection:</p>
                            <div className="mockup-code">
                                <pre ><code>
                                    from flaskosql.db import Connect<br />
                                    &nbsp;&nbsp;from flaskosql.model import Model<br />
                                    &nbsp;&nbsp;# Setup the connection<br />
                                    &nbsp;&nbsp;connection = Connect('orm', 'ormpw', 'localhost', '1521', 'orcl').get_connection()<br />
                                    &nbsp;&nbsp;# Create the connection for the model<br />
                                    &nbsp;&nbsp;Model.set_connection(connection=connection)</code></pre>
                            </div>

                        </li>

                        <li>
                            <p>Perform database operations using the model:</p>
                            <div className="mockup-code">
                                <pre ><code># Creation of tables (migrations)<br></br>
                                    &nbsp;&nbsp;def migrate():<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;Roles.create_table()<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;Users.create_table()<br></br><br></br>
                                    &nbsp;&nbsp;migrate()<br></br><br></br>
                                    &nbsp;&nbsp;# Filter users by a condition<br></br>
                                    &nbsp;&nbsp;role = Roles.get(id=1, name="ASHRAF")<br></br><br></br>
                                    &nbsp;&nbsp;# Insert a new user<br></br>
                                    &nbsp;&nbsp;role = Roles(id=1, name="ASHRAF")<br></br><br></br>
                                    &nbsp;&nbsp;role.save()<br></br>
                                    &nbsp;&nbsp;# Update a user's email<br></br><br></br>
                                    &nbsp;&nbsp;role.name = "SAMI"<br></br>
                                    &nbsp;&nbsp;role.update()<br></br><br></br>
                                    &nbsp;&nbsp;# Delete a user<br></br>
                                    &nbsp;&nbsp;role.delete()</code></pre>
                            </div>

                        </li>
                    </ol>
                    <p><strong>License</strong></p>
                    <p class="mb-4">This package is licensed under the MIT License. See the <a href="https://chat.openai.com/LICENSE">LICENSE</a> file for more information.</p>
                </div>
            </div>
        </div>
    );
}

export default FlaskoSQL;
