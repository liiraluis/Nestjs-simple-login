<h2>Nestjs simple login</h2>
<p>Simple login using Nestjs, Bcrypt, Passport and JWT</p>
<h3>Installation</h3>
<ul>
    <li>
        Install the dependencies
        <code>
            $ yarn
        </code>     
    </li>
    <li>
        Set enviroment variables
    </li>
</ul>
<h3>Usage</h3>
<p>You can make use of this api with any client made to interact with web APIs like Thunderclient, Postman, Curl, etc</p>
<p>To register a user you should make a <b>POST</b> request to /users/register and provide a json with the userInfo data, which should contain its email, username and password (min 8 characters)</p>
<p>To login you should make a <b>POST</b> request to /auth/login and provide a json with the loginInfo, which should contain the email and password of the user that is trying to login</p>
<p>Once you are logged, you can set your JWT token in the header (authorization: Bearer your_token) of the <b>GET</b> request to the main route of the server</p>

