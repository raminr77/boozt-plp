# Boozt PLP

Welcome to Boozt PLP!

## Backend Stack

- PHP
- MySQL

## Frontend Stack

- React
- Tailwind CSS
- JavaScript with TypeScript
- SCSS Module System

## Getting Started

### Prerequisites

Make sure you have the following software installed on your system:

- PHP (version > 7.4)
- MySQL
- Node.js (version > 18.12)
- Yarn (recommended) or npm (JavaScript package manager)

### Installation

1. Clone or download the latest version of this project.
2. Create a new database (schema) in your MySQL instance and name it `boozt_db`.
3. Import the project tables from the `product_list.sql` file located in the root directory into your database.
4. Open your terminal or command line and navigate to the project directory.
5. Create a copy of the `.env.example` file and rename it to `.env` in the root directory.
6. Install the project dependencies by running the following command:

```shell
   npm install
```

7. To run the backend project, execute the following command:

```shell
   npm run back-end
```

8. Open a new terminal window and start the frontend project by running:

```shell
    npm start
```

9. For development mode, you can run the following command to compile Tailwind CSS styles:

```shell
    npm run styles
```

10. Access the frontend project in your browser at http://localhost:3000.
11. You can access the product API at http://localhost:8000/api/v1/product.php.

### Changing Database Configuration

If you need to change the database configuration (e.g., database name, username, etc.), you can do so by modifying the following file:

```shell
server/config/Database.php
```

### Additional Documents

For more detailed information about this project, please refer to the documents folder located in the root directory. You can find additional resources and documentation [here](https://github.com/raminr77/boozt-plp/tree/main/documents).

### Demo

You can check out a live demo of this project by visiting https://boozt-plp.ir/.

Feel free to explore and enjoy the Boozt PLP!
