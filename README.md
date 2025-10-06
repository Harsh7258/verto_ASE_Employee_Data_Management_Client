# Employee Data Management

## Project Goal

A straightforward CRUD (Create, Read, Update, Delete) application to manage a list of employees. Project frontend connected with Employee Data Management API.

- **Employee Data Management API repo:**: [API Repo](https://github.com/Harsh7258/verto_ASE_Employee_Data_Management_API)
- Mainly focused in building in RESTf API for Employee Data Managemnet

- **Brainstrom Frontend Flow:**: [FLow Link](https://app.eraser.io/workspace/IhhmCnFSzFOsrn4loXrn?origin=share)

## Core Features

## Installation & Setup: to run it locally

1. Clone the repository:
   git clone <repo-url>
   cd to folder path

2. Install dependencies:
   run
   npm install

3. Connect backend with local server - in api/employeeDataAPI.js
   server runs at 8000
   add it as BASEURL=http://localhost:8000/api/employee in .env
   use Employee Data Employeement API

4. Start the react:
   npm run dev

5. Vite react runs at http://localhost:5173

6. Good to go!!

### Technologies Used

- Backend: Node.js, Express.js, SQLite, express-async-handler, cors, express-rate-limit, Postman
- Frontend: React, Vite, Tailwind CSS, Zustand, React Toastify, Axios

### Backend

- Full set of CRUD API endpoints for employees (`/api/employee`):
  - **Create**: Add a new employee.
  - **Read**: Get all employees or a single employee by ID.
  - **Update**: Edit employee details.
  - **Delete**: Remove an employee from the database.
- Employee fields: `name`, `email`, and `position`.
- **Postman** used for API endpoint testing and API documentation
- Uses **SQLite** for data persistence.
- Clean RESTful API structure using **Express.js**.
- Error handling and response status codes implemented.
- Rate limiting applied to prevent abuse.
- **Documentation**: [API Docs](https://documenter.getpostman.com/view/31106866/2sB3QJMpxQ)
- **Deployed API**: [Live API](verto-ase-employee-data-management-api-production.up.railway.app)

### Frontend

- Display all employees in a **table** with columns: Name, Email, Position, and Actions.
- Actions include **Edit** and **Delete** buttons for each employee.
- Add new employee via a **modal form**.
- Edit employee details in the same modal, prefilled with existing data.
- Search bar to find employees by name, email, or position.
- Dropdown filter to sort employees (latest, oldest, or all).
- Pagination to display a fixed number of employees per page (default 10).
- State management using **Zustand**.
- Toast notifications using **React Toastify** for success and error messages.
- Clean UI using **Tailwind CSS**.

## Evaluation Criteria

- **Bonus Features**:
  - Search/filter employees on the frontend.
  - Frontend form validation.
  - Optional backend tests for each CRUD endpoint.
