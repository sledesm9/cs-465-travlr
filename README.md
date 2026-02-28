# Travlr Getaways Full Stack Project

## Overview

This is a full stack travel booking website developed with the MEAN stack (MongoDB, Express, Angular, Node.js).

The website is for customers to view available trips. For the admin, they are able to log in to the website and add trips, update trips, or delete trips.

The admin section is developed as a SPA (single-page application). This means that the page does not reload as the admin navigates through the different pages.

This project has helped me understand the inner workings of a real-world full stack web application.

---

## Architecture

### Frontend Development

This project uses two types of frontend development.

The first is the Express website. The second is the Angular SPA.

The first one is developed with HTML, CSS, JavaScript, and Handlebars templates. The page reloads as the user navigates through the different pages.

This is appropriate for the customer section because they only need to view the available trips.

The Angular admin site operates differently.

The page loads once and does not refresh. The Angular application communicates with the server through API requests.

This is faster and easier for the admin to manage the trips.

The Express website is simple and good for the customer.

Angular is better for the admin in terms of functionality.

---

### Why MongoDB Was Used

The reason for using MongoDB is that it is best used with JavaScript applications.

The data is stored in a form that is close to JSON.

MongoDB is flexible in that the information regarding the trips is stored without the need for tables as in a database.

Mongoose is used to connect the MongoDB database to the Express server.

---

## Functionality

### JSON vs JavaScript

JSON is used to transport data between the frontend and the backend.

JavaScript is the programming language used to write the application.

When the Angular admin site needs the data regarding the trips, the server sends the data in the form of JSON.

The data is then viewed on the page.

JSON is used to connect the frontend, the backend, and the database so that they can talk to each other.

---

### Code Improvements and Reusable Component

The code has gone through a number of improvements throughout the project to keep things neat and organized.

One of the notable improvements is that an Angular service was added to handle API requests.

This kept the code organized and neat.

Static HTML pages were converted to Handlebars templates to enable dynamic loading of trip data.

Components were also reused in the application, such as a trip card component, to display trip information.

This reduced code duplication.

---

## Testing

### Methods, Endpoints, and Security

The application has been tested to ensure that all functionalities are working properly.

The application uses various HTTP methods:

• GET methods are used to retrieve trip information from the database  
• POST methods are used for login and creating trips  
• PUT methods are used for updating trips  
• DELETE methods are used for deleting trips

Endpoints such as /api/trips and /api/trips/:tripId have been tested using Postman and the Angular admin site.

Security has also been implemented and has provided an additional layer of testing.

JSON Web Tokens (JWT) have been implemented to ensure that only authorized users are able to make changes in the application.

• Trips load properly  
• Trips can be edited and saved  
• Login works as expected  
• Unauthorized users cannot edit trips

---

## Reflection

### What I Learned

This course has provided me with a clear understanding of how a full-stack web application works from start to finish.

I have always had a problem understanding how the frontend, backend, and database work together.

Now I have a clear understanding of how this works.

I have also learned how to combine Angular, MongoDB, Express, and Node.js in a single application.

---

### Skills Developed

Key skills developed in this course include:

• Development of a full-stack web application  
• Development of REST API using Express  
• Development of MongoDB databases  
• Development of Angular single-page applications  
• Development of login security using JWT  
• Testing API endpoints

This is a showcase of my capabilities in developing a full-stack web application.

It is part of my portfolio.

---

## Getting the project up and running

### Install the dependencies

Open your terminal and navigate to the website directory:
cd website
npm install


Then navigate to the admin directory and install there too:


cd travlr-admin
npm install


---

### Run the Express server

Run the Express server from the website directory:


npm start


Then open your browser and visit:


http://localhost:3000


---

### Run the Angular admin site

Run the Angular app from the admin directory:


ng serve


Then open your browser and visit:


http://localhost:4200


---

## GitHub Repository

https://github.com/sledesm9/cs-465-travlr

---

## Author

Stevan Ledesma  
SNHU Computer Science Program
