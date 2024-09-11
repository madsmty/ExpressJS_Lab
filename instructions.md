# ExpressJS Lab 2

New Endpoints and Unit testing

# 1. Overview

In the prevous lab, we created and ran a basic ExpressJS app in NodeJS.
Now we will expand the app, we will add data files and pull the information from them
We will add nodemon so the app restarts automatically whenever a file is changed.

# 2. Environment Prerequisites

All prerequisites from Lab 1

# 3. Build Instructions

We will add nodemon to the proyect. Nodemon is a tool that restarts the app each time a change is done to a file. It will be installed only as a development dependency.

To setup nodemon simply run the following command:

        npm install --save-dev nodemon 

Modify the package.json file. In the line where the start script is defined, change it to the following:

        "start": "nodemon ./bin/www",

# 4. Instructions

There is a new folder in this lab. The folder "data" contains two files with data for users and shipments.

        - Create a new router for the shipments endpoint.
        - Create a function to handle "/shipments" endpoint, it should return a list of all shipments
        - Create a function to handle "/shipments/{shipmentId}", it should return the shipment specified in the shipmentId parameter.
        - If the shipmentId is incorrect, ensure that the error message returned in the response indicates so.
        - Modify the "/users" endpoint to return the info from the data file.

With these changes, you should have 3 endpoints running correctly. Run the app and point your browser to the following endpoints


        localhost:3000/users
        localhost:3000/shipments
        localhost:3000/shipments/2

All of them should be returning the expected response as described previosuly.

Unit testing is an important step of development and a good practice. In this lab we will modify the existing test file to add the following:

        - Test that the /users endpoint is returning status 200 (already implemented in the code)
        - Test that the /users endpoint is returning an array
        - Test that the array size returned by the endpoint is greater than 0
        - If the size is greater than 0, test that the objects contained in the "/users" endpoint array have the following format
                "userId":integer,
                "name":string,
                "last_name":string,
                "email":string,
                "billing_address":object
        - Test that the /shipments endpoint is returning status 200 (already implemented in the code)
        - Test that the /shipments endpoint is returning an array
        - Test that the array size returned by the endpoint is greater than 0
        - If the size is greater than 0, test that the objects contained in the "/shipments" endpoint array have the following format
                "shipmentId":integer,
                "userId":integer,
                "shipping_address":object,
                "shipping_date":date,
                "estimated_arrival":date,
                "status":string
        - Test that status only has the following values in the array: "preparing","sent","delivered","cancelled"
        - Test that the /shipments/{shipmentId} endpoint is returning status 200
        - Test that the /shipments/{shipmentId} endpoint is returning an array
        - Test that the array size returned by the endpoint is 0 or 1
        - If the size is greater than 0, test that the object contained in the "/shipments/{shipmentId}" endpoint array have the following format
                "shipmentId":integer,
                "userId":integer,
                "shipping_address":object,
                "shipping_date":date,
                "estimated_arrival":date,
                "status":string
        
After the tests run correctly, commit the changes to your repo branch named "Lab_2"

Create a PR from branch "Lab_2" to branch "main"

Your mentor will review and approve your PR

# 5. Testing and Validation Requisites

Run the test in the terminal

        npm run test

# 6. Acceptance Criteria

## 6.1 Evaluation criteria

All test assertions should pass

## 6.2 Expected documentation and deliverables

Provide a screenshot of the test script results

# 7. Resources

## Official Language/Framework/Library Documentation 

- https://nodejs.org/
- https://expressjs.com/
- https://www.postman.com/
- https://github.com/
- https://mochajs.org/
