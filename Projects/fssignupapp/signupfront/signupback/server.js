const express = require("express")
//initializing express
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const routeUrls = require('./routes/routes');
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, ()=>console.log("DB Connected Successfully"))


//I must pass in a body parser to help pass in my incoming and outgoing requests
//initialize it also as a middleware using the app.use function
app.use(express.json());

//now I just activated body parser in my application

//Now I must initialize cors
app.use(cors());


/*initialize our routes as a middleware
app.use(arg1: basepath, arg2: routeurlsthatIimported)
this means that the routeUrls will be appended to the base path
*/
app.use('/app', routeUrls)



//listen on port 4000 because react runs on 3000 by default
app.listen(4000, () =>{
    console.log("Server is up and Running on Port 4000");
});


/* Network Access
1. Goto MongoDB- Network Access
2. Add IP Address --> Check Allow Connection From Anywhere


Database Access
1. Add a New Database User
a. Enter the username
b. Enter the password
c. Click Add User to Add The User to your database
d. There should be a status line when the status line stops moving meaning your changes have been saved successfully

2. Click on Connect
3. Select the option "Connect Your Application"
4. copy the connection string link
5. Go to your server.js file in your be and paste that link to connect your application to MongoDB
6. Use the .env to have your credentials there and not exposed
7. in your backend folder create a new file called .env
8. add your username, password and db name in the appropriate field of .env file
*/
//Remember to install Rest Client in your extensions