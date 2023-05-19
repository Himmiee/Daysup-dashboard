# Dashboard Application Backend

This repository contains the backend codebase for a dashboard application built using Node.js and TypeScript.

## Prerequisites

Make sure you have the following installed before setting up the project:

- Node.js (version 16.16.0)
- NPM (version 9.6.6)

## Getting Started

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/Himmiee/Daysup-dashboard.git
   ```

2. Install the project dependencies:

   ```shell
   npm install
   ```

3. Create a `.env` file in the project root and provide the necessary environment variables. You can use the `.env.example` file as a template.

4. Build the TypeScript code:

   ```shell
   npm run build
   ```

5. Start the server:

   ```shell
   npm start
   ```

   The server should now be running on `http://localhost:<port>`, where `3050 ` is the port specified in your environment variables or the default port.

## Development

To run the application in development mode with automatic reloading, use the following command:

```shell
npm run dev
```

This will start the development server using [Nodemon](https://nodemon.io/), which automatically restarts the server whenever changes are made to the source code.

## Testing

To run the tests, execute the following command:

```shell
npm test
```



## API Documentation

The API documentation is available at `http://localhost:<port>/api-docs` when the server is running. It provides detailed information about the available endpoints, request/response schemas, and authentication requirements.

## Project Structure

The project structure is organized as follows:

```
.
├── src/
│   ├── controllers/     # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── helpers/         # logic
│   └── index.ts         # Express app initialization
├── test/                # Test files
├── .env.example         # Example environment variables
├── .gitignore           # Git ignore rules
├── package.json         # NPM package configuration
└── tsconfig.json        # TypeScript configuration
```


