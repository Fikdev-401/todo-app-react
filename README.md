# Todo List Web App 📝

A simple Todo List web application built with React and JSON Server as a mock backend.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Overview
This Todo List web app allows users to:
- Add new tasks
- View a list of tasks


It uses **React** for the front end and **JSON Server** to simulate a REST API for managing todos. This project is ideal for learning the basics of CRUD operations and working with REST APIs in a React environment.

## Features
- **Add Todo**: Create a new todo with a title and optional description.
- **View Todos**: View all current todos in a list format.


## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/todo-list-web-app.git
   cd todo-list-web-app
2. **Install dependencies for React app:**
   ```bash
   npm install

3. **Install JSON Server (if not already installed):**
   ```bash
   npm install -g json-server

4. **Start JSON Server:**
   JSON Server will act as the backend, handling data operations for the todo list.
   ```bash
   json-server --watch db.json --port 5000

5. **Start the React app:**
   Open another terminal window and run:
   ```bash
   npm start
6. **Access the app:**
   The React app will run on [http://localhost:3000](http://localhost:3000). Make sure that JSON Server is running on port 5000, as the app will fetch and store data from this server.

## Usage
1. **Add a Todo**: Enter a title and description for the new todo, then click "Add" to save it.



## Technologies Used
- **React**: Frontend library for building the user interface and handling component-based structure.
- **JSON Server**: Mock REST API used to handle CRUD operations for todos.
- **Axios**: Library for making HTTP requests from React to JSON Server.

## Contributing
Feel free to fork this project, report issues, or submit pull requests to improve functionality or fix bugs.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
