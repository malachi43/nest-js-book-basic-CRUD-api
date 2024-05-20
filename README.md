# Project Name

SocialsJSON

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [NPM Scripts](#npm-scripts)
- [Starting Application](#start-application)
- [API Endpoints](#api-endpoints)
- [DOCUMENTATION](#postman-api-docs)

## Introduction

BooksJSON is an API built with Nest.js that can be used with any type of front end project that needs basic api for managing list of books. The data are returned in JSON format.

You can use examples below to check how BookJSON works.
Feel free to enjoy it in your awesome projects!

This API was written using javascript.

## Features

The BookJSON provide the following functionalites:

- create a book
- get all books
- get a specific book
- update a specific book
- delete a specific book

## Prerequisites

List of software and tools required to run your project.

- Node.js
- Postman (optional, for testing API endpoints)

## Getting Started

You need to have node js installed. [For installation guide visit](https://nodejs.org/en/download). Then follow the guide thereafter.

### Installation

1. Clone the repository:

   ```bash
   git clone <git@github.com:malachi43/nest-js-book-basic-CRUD-api.git>
   ```

2. Switch to the repo folder

```bash
cd book-app
```

3. Install dependencies

## Install dependencies:

```bash
npm install
```

4. NPM Scripts

## NPM scripts

- npm run start:prod - Build application
- npm start - Starts application
- npm run start:dev - Starts application in watch mode
- npm run test - Runs Jest test runner

## Start Application

- npm start
- Go to your favourite browser and enter the URL: `http://localhost:3000`

### API Endpoints:

- create a book - `http://localhost:3000/book` Method - POST
- get a book - `http://localhost:3000/book/{id}` Method - GET
- get all books - `http://localhost:3000/books` Method - GET
- delete a book - `http://localhost:3000/{id}` Method - DELETE
- update a book - `http://localhost:3000/{id}` Method - PUT

## Postman API DOCS

[See documentation here](https://documenter.getpostman.com/view/23505718/2sA3QmEujz)
