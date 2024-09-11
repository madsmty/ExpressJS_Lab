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

  Create a folder and clone this repository in it.

- Install or Update NodeJS
- Install or Update npm
- Install or update nvm
- Install or update npx
- Install or update git

On the main directory, initialize the git repository
  git init

Setup the expressJS application running the following command
  npx express-generator

Install Mocha, chai and supertest
  npm install mocha
  npm install chai
  npm install supertest

# 4. Instructions

Make sure that the file test/routes.test.mjs exists

After setting up all dependencies, you should be able to run the app in the terminal

  npm run start

After running the app, open Postman and excecute a GET call on both this endpoints:

-localhost:3000/
-localhost:3000/users

The first endpoint should return a HTML template with status code 200. The second endpoint should return the following text: "return a resource"

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

# 7. Resources

## Official Language/Framework/Library Documentation 
Mocha https://mochajs.org/
## Main concepts (Databases, Object Oriented Programming, Classes, Polymorphism, etc)
## Blog articles, samples
## Public repositories
## Video tutorials
