# Inventera

Inventera is an inventory management application aimed at small candle businesses. It is a web application that allows users to create, edit, and delete inventory items.

### Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)

<br>

### Features

A few things you can do with Inventera:

- Create, edit, and delete inventory items
- View inventory items in a list view
- Track product production using production tasks
- Calculate cost of goods
- Calculate candle formulations

<br>

## Getting Started

Before you can use Inventera, you will need to have a database and some packages installed on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation and Setup

Clone the repository

```zsh
git clone
```

Install dependencies in root directory and client/ directory

```zsh
npm install && cd client && npm install
```

Update database configuration inside db/config/config.json to match your environment

```json
{
  "development": {
    "username": "root",
    "password": "root",
    "database": "inventera",
    "host": "localhost",
    "dialect": "postgres"
  }
}
```

From the db/ directory, run the following command to run the database migrations:

```zsh
cd db && npx sequelize cli db:migrate
```

Next, run the following command to populate the database with some initial data:

```zsh
npx sequelize cli db:seed:all
```

Run the application

```zsh
npm run dev
```
