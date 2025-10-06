# Employee Data Management

## Project Goal

A straightforward CRUD (Create, Read, Update, Delete) application to manage a list of employees.

## Core Features

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
