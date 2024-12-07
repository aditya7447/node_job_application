# Node Job Application

A Node.js application developed with **Express.js** and **MongoDB** to demonstrate CRUD operations on job applications. This app performs the following operations on job data:

- **Create Job**: Add new job applications to the system.
- **Read Job**: Fetch a list of all job applications.
- **Update Job**: Modify job application details by job ID.
- **Delete Job**: Remove a job application by job ID.

---

## Technology Stack

- **Backend Framework**: Express.js
- **Database**: MongoDB (using Mongoose for data modeling)
- **Environment**: Node.js

---

## Features

- **Create Job**: POST a new job application.
- **Get Jobs List**: GET all available job applications.
- **Update Job**: PUT to update a job application by its ID.
- **Delete Job**: DELETE a job application by its ID.

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/aditya7447/node_job_application.git
    ```

2. Navigate to the project folder:
    ```bash
    cd node_job_application
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up MongoDB:
    - Ensure you have a **MongoDB** cluster (or a local MongoDB instance).
    - Update the MongoDB connection string in `index.js` if needed:
      ```javascript
      mongoose.connect("mongodb+srv://<username>:<password>@cluster0.mongodb.net/")
      ```

5. Run the application:
    ```bash
    npm start
    ```

The application will start on port `10000` by default. You can access the APIs via `http://localhost:10000`.

---

## API Endpoints

### 1. Create Job
**POST** `/api/jobs`  
Create a new job application.

#### Request Body (JSON):
```json
{
    "title": "Software Developer",
    "description": "Excited for Software Developer position.",
    "company": "Aloha Technology Pvt Ltd",
    "location": "Baner",
    "salary": 15000
}
