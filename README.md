# Simple Calculator with Logs

A full-stack calculator application that performs basic arithmetic operations and logs all calculations to a database. The frontend is built with HTML, CSS, and JavaScript, while the backend is a Spring Boot application with MySQL database integration.

## Features

- Basic calculator operations (addition, subtraction, multiplication, division, modulo)
- Calculation history stored in a MySQL database
- Dark mode toggle with preference saved in localStorage
- Responsive design that works on desktop and mobile devices
- Keyboard support for all operations
- Real-time history updates

## Demo (Screenshot)

<img width="1305" height="901" alt="Screenshot 2025-08-03 003159" src="https://github.com/user-attachments/assets/e5bb99b2-2876-457b-97fb-ad3896d3cf7c" />

## Project Structure

```
Simple Calculator with Logs/
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/example/calculatorlogger/
│   │       │   ├── CalculatorLoggerApplication.java
│   │       │   ├── controller/
│   │       │   │   └── CalculationLogController.java
│   │       │   ├── model/
│   │       │   │   └── CalculationLog.java
│   │       │   └── repository/
│   │       │       └── CalculationLogRepository.java
│   │       └── resources/
│   │           └── application.properties
│   ├── pom.xml
│   └── db/
│       └── calculator_logs.sql
└── frontend/
    ├── index.html
    ├── styles.css
    └── script.js
```

## Prerequisites

- Java 11 or higher
- Maven 3.6 or higher
- MySQL 8.0 or higher
- Node.js (for serving frontend, optional)

## Backend Setup

1. **Database Configuration**:
   - Install MySQL if not already installed
   - Create a database named `calculator_logs`:
     ```sql
     CREATE DATABASE calculator_logs;
     ```
   - The application will automatically create the required tables on first run

2. **Update Database Credentials** (if needed):
   - Open `backend/src/main/resources/application.properties`
   - Modify the following properties if your MySQL setup is different:
     ```properties
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```

3. **Build and Run the Backend**:
   ```bash
   cd backend
   mvn clean install
   mvn spring-boot:run
   ```
   
   The backend will start on port 3000.

## Frontend Setup

The frontend is a static application that can be served in multiple ways:

### Option 1: Direct Browser Open
- Simply open `frontend/index.html` in your browser

### Option 2: Using a Local Server
- If you have Node.js installed:
  ```bash
  cd frontend
  npx serve
  ```
- Or using Python:
  ```bash
  cd frontend
  python -m http.server 8000
  ```

## API Endpoints

The backend exposes the following RESTful API endpoints:

- `POST /api/log` - Log a calculation
  - Request body: `{ "calculation": "string" }`
- `GET /api/logs` - Retrieve all calculation logs
- `DELETE /api/logs` - Delete all calculation logs

## Usage

1. Start the backend server as described in the Backend Setup section
2. Open the frontend in your browser
3. Perform calculations using the calculator interface or keyboard
4. View calculation history in the history panel
5. Toggle dark mode using the button at the bottom of the page
6. Clear history using the "Clear History" button

## Development

### Backend Development

- The backend is built with Spring Boot 2.7.5
- Uses Spring Data JPA for database operations
- MySQL is used as the database

To run in development mode:
```bash
cd backend
mvn spring-boot:run
```

### Frontend Development

- Pure HTML, CSS, and JavaScript (no frameworks)
- Responsive design with mobile-first approach
- Accessible with proper ARIA attributes
- Dark mode support with localStorage persistence

## Troubleshooting

- If the frontend cannot connect to the backend, ensure the backend is running on port 3000
- If there are database connection errors, verify MySQL is running and credentials are correct
- For CORS issues, the backend is configured to allow all origins for development

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
