# ExpressJS Lab I

# 1. Overview

In this lab, you will setup and run a basic ExpressJS app in NodeJS. 

# 2. Environment Prerequisites

* NodeJS v20 or higher
* npm v10.4 or higher
* nvm v1.1.11 or higher
* npx v10.4 or higher
* git v2.40.1 or higher
* Postman v11.11 or higher
* Mocha v10.7.3 or higher
* Chai v5.1.1
* Supertest v7.0.0

# 3. Build Instructions

- Install or Update NodeJS
- Install or Update npm
- Install or update nvm
- Install or update npx
- Install or update git

Fork this git repository, and then clone the fork on your local machine

Setup the expressJS application running the following command

        npx express-generator

Install the dependencies

        npm install

Install Mocha, chai and supertest

        npm install --save-dev mocha
        npm install --save-dev chai
        npm install --save-dev supertest

# 4. Instructions

If the environment was setup correctly you should be able to run the start script

        npm run start

After the server starts, open postman, and create a GET call to the following URL (note that port 3000 could be different if it is already being used on your local machine by another program): localhost:3000/ 

You should see the response from the server, an html source that includes "Welcome to Express" in the body.

In your editor, open the package.json file and in the "scripts" section add the following line

        "test":  "mocha"

Now on the terminal, run the test script

        npm run test

The test should run correctly and show 2 assertions passing

Create a file in the parent folder of your project and name it .gitignore. Open it on your editor and add node_modules to it, This will tell git to ignore the folder with all the dependencies that where installed.

Commit your changes to the main branch of your repository

Create a new branch on git based on the main branch, and call it "Lab1"

Push your repository to github
 

## 4.1 Functional Requirements
## 4.2 Business Rules
## 4.3 Technical Requirements

# 5. Testing and Validation Requisites

Run the test in the terminal

        npm run test

# 6. Acceptance Criteria

## 6.1 Evaluation criteria

Both test assertions should pass

## 6.2 Expected documentation and deliverables

Provide a screenshot of the test script results

# 7. Resources

## Official Language/Framework/Library Documentation 

https://nodejs.org/
https://expressjs.com/
https://www.postman.com/
https://github.com/
