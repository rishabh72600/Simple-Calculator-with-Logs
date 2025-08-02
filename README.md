Simple Calculator with Logs

A basic web-based calculator built using *HTML, **CSS, **JavaScript, and **Java with MySQL* for backend log storage. This application allows users to perform simple arithmetic operations and also keeps track of calculation history using a MySQL database.

## 🚀 Features

- Basic arithmetic operations: Addition, Subtraction, Multiplication, Division
- Real-time calculation display
- Logs each calculation in a persistent MySQL database
- History section to view past calculations
- Clean and user-friendly interface

## 🖼 Demo


<img width="1305" height="901" alt="Screenshot 2025-08-03 003159" src="https://github.com/user-attachments/assets/48931c79-cfaa-40b9-9dde-7386704fb5fc" />

## 🛠 Tech Stack

*Frontend:*
- HTML
- CSS
- JavaScript

*Backend:*
- Java (Servlets)
- JDBC

*Database:*
- MySQL

## 📂 Project Structure

Simple-Calculator-with-Logs/ ├── frontend/ │   ├── index.html │   ├── style.css │   └── script.js ├── backend/ │   ├── CalculatorServlet.java │   └── DBConnection.java ├── database/ │   └── schema.sql └── README.md

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/rishabh72600/Simple-Calculator-with-Logs.git
cd Simple-Calculator-with-Logs

2. Database Setup

Import the SQL file located in the database/ directory into your MySQL server:


CREATE DATABASE calculator_db;

USE calculator_db;

CREATE TABLE logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  expression VARCHAR(255),
  result VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

3. Backend Setup

Use a servlet container like Apache Tomcat.

Configure your DBConnection.java file with your MySQL credentials.

Deploy the Java backend files to your server environment.


4. Run the Frontend

Open index.html in any modern web browser.


📌 Future Improvements

Add user authentication

Support for scientific calculations

Export logs as PDF or CSV

Mobile responsiveness


📃 License

This project is licensed under the MIT License.

🙋‍♂ Author

Made with ❤ by Rishabh Raj
