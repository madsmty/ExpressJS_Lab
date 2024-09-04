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

On the main directory, initialize the git repository
  git init

Setup the expressJS application running the following command
  npx express-generator

Install Mocha, chai and supertest
  npm install mocha
  npm install chai
  npm install supertest

# 4. Instructions

Create a folder named test in the parent folder of the app
Inside this folder create a file named routes.test.mjs

Paste the following into the test file

  // test/routes.test.js
  import {expect} from 'chai';
  import request from 'supertest';
  import express from 'express';
  import indexRouter from '../routes/index.js';
  import userRouter from '../routes/users.js';

  describe('Express App', () => {
    const app = express();
    app.set('view engine', 'jade');
    app.use('/', indexRouter);
    app.use('/users', userRouter);

  it('should respond with a greeting message when getting the root endpoint (GET:localhost/', async () => {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
    expect(response.text).to.contain('Welcome to Express');
    });

  it('should respond with a  message when getting the users endpoint (GET:localhost/users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).to.equal(200);
    expect(response.text).to.contain('respond with a resource');
    });
  });


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
## Main concepts (Databases, Object Oriented Programming, Classes, Polymorphism, etc)
## Blog articles, samples
## Public repositories
## Video tutorials
