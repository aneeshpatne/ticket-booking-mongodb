# Ticket Booking Application

This is a simple ticket booking application built with Node.js, Express, MongoDB, and Handlebars.

## Features

- Add new movies
- List all movies
- Select seats for a movie
- Calculate total price based on selected seats

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Frontend**: HTML, CSS, JavaScript, Handlebars.Js

## Project Structure

```
controllers/
    courses.js
    index.js

model/
    course.model.js
    index.js

package.json

public/
    css/
        style.css
    images/
    js/
        script.js

README.md

views/
    add-course.hbs
    index.hbs
    layouts/
        mainlayout.hbs
    list.hbs
```

## Installation

1. Clone the repository:
     ```sh
     git clone https://github.com/your-username/ticket-booking-app.git
     cd ticket-booking-app
     ```

2. Install dependencies:
     ```sh
     npm install
     ```

3. Start the application:
     ```sh
     npm start
     ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Adding a Course

1. Navigate to `http://localhost:3000/course/add`.
2. Fill in the course details and submit the form.

### Listing Courses

1. Navigate to `http://localhost:3000/course/list`.
2. View the list of all courses.

### Selecting Seats

1. On the add movie page, select the number of seats and the price per ticket.
2. The total price will be calculated based on the selected seats.

