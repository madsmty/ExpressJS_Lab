# ExpressJS Lab 2

New Endpoints and Unit testing

# 1. Overview

In the prevous lab, we created and ran a basic ExpressJS app in NodeJS.
Now we will expand the app, we will add data files and pull the information from them
We will add nodemon so the app restarts automatically whenever a file is changed.

# 2. Environment Prerequisites

All prerequisites from Lab 2

# 3. Build Instructions

Follow the instructions from labs 1 and 2 if not done already.

# 4. Instructions

- Create a folder named controllers. Inside create a file for users and shipments. These files should contain the controller functions the routers will refer to.

- Create a folder named transformers and likewise, two .js files for users and shipments. These files will contain the transformer functions used by the controllers.

- Create a controller function that gets the list of all users.
- Create a controller function that gets one user, depending on a userId parameter passed to it.
- Create a controller function that returns the list of all shipments
- Create a controller function that returns one shipment, depending on a shipmentId parameter
- Create a shipment transformer function. This function will add a field that calculates the number of days until the estimated delivery date compared to the moment the function is called.
- Create a user transformer function that returns an additional field named "full_name". This field should be in the format: "last_name, first name"  
- For the existing functions that return both users and shipments, this should check if there was a parameter called "template" in the url. The parameters values can be true or false. If the value is true, the endpoint should return in the reponse the rendered template. If it is false or no parameter was sent, the response should be just the json object.

With these changes, you should have 4 endpoints running correctly. Run the app and point your browser to the following endpoints

        localhost:3000/users
        localhost:3000/users/1
        localhost:3000/shipments
        localhost:3000/shipments/2


All of them should be returning the expected response as described previosuly in json format.
The following 4 calls should return the same information, but using the html template


        localhost:3000/users
        localhost:3000/users/1
        localhost:3000/shipments
        localhost:3000/shipments/2
        
After the tests run correctly, commit the changes to your repo branch named "Lab_3"

Create a PR from branch "Lab_3" to branch "main"

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
