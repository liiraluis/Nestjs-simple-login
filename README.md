<h2>Nestjs simple login</h2>
<p>Simple login using Nestjs, Bcrypt, Passport and JWT</p>
<h3>Installation</h3>
<ul>
    <li>Clone the repository</li>
    <li>Open the project folder in Visual Studio Code</li>
    <li>Open a terminal in the project inside VSCode</li>
    <li>Execute the command <code>yarn install</code> to install all the dependencies</li>
    <li>Create and configure your .env inside the root folder of the project, with the variables:
        <ul>
            <li>
                <b>DB_URI</b>: The URI of the database in mongodb. Example: mongodb://127.0.0.1:your_port/database_name
            </li>
            <li>
                <b>JWT_SECRET</b>: The secret of your JWT
            </li>
            <li>
                <b>N_HASH</b>: The number of iterations that the Bcrypt hash algorithm is going to make for the user password. By default 8 if not specified here.
            </li>
        </ul>
    </li>
</ul>
<h3>Usage</h3>
<p>You can make use of this api with any client made to interact with web APIs like Thunderclient, Postman, Curl, etc</p>
<p>To register a user you should make a <b>POST</b> request to /users/register and provide a json with the userInfo data, which should contain its email, username and password (min 8 characters)</p>
<p>To login you shoul make a <b>POST</b> request to /auth/login and provide a json with the loginInfo, which should contain the email and password of the user that is trying to login</p>
<p>Once you are logged, you can set your JWT token in the header (authorization: Bearer your_token) of the <b>GET</b> request to the main route of the server</p>

