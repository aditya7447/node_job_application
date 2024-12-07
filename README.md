# Node Job Application

A Node.js application developed with **Express.js** and **MongoDB** to demonstrate CRUD operations on job applications. This app performs the following operations on job data:

- **Create Job**: Add new job applications to the system.
- **Read Job**: Fetch a list of all job applications.
- **Update Job**: Modify job application details by job ID.
- **Delete Job**: Remove a job application by job ID.

The application is hosted on [Render](https://jobapp-75y1.onrender.com).

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

## Installation (for local development)

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
      mongoose.connect("mongodb://localhost:27017/jobapp")
      ```

5. Run the application:
    ```bash
    npm start
    ```

The application will start on port `10000` by default. You can access the APIs via `http://localhost:10000`.

---

## Hosted Version

The API is live and hosted on **Render**. You can access the endpoints here:

- **Base URL**: `https://jobapp-75y1.onrender.com/api/jobs`

---

## API Endpoints

### 1. Create Job
**POST** `/api/jobs`  
Create a new job.

#### Request Body (JSON):
```json
{
    "title": "Software Developer",
    "description": "Excited for Software Developer position.",
    "company": "Aloha Technology Pvt Ltd",
    "location": "Baner",
    "salary": 15000
}
```
---

### 2. List Job
**GET** `/api/jobs`  
Get all jobs.

---

### 3. Update Job
**PUT** `/api/jobs/:id`
Update a job by its ID. To get the job ID, first hit the GET API.
For example: /api/jobs/675455ca08da3sdfsdfj8ca5a

#### Request Body (JSON): Provide the updated details for the job ID:
```json
{
    "title": "Senior Software Developer",
    "description": "Excited for Senior Software Developer position.",
    "company": "Aloha Technology Pvt Ltd",
    "location": "Pune",
    "salary": 4500
}
```
---

### 4. Delete Job
**DELETE** `/api/jobs/:id`  
Delete a job by its ID. To get the job ID, first hit the GET API.
For example: /api/jobs/675455ca08da3sdfsdfj8ca5a

