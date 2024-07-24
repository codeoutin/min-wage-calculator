# Minimum Wage Calculation API

This project is a backend API built with Express.js and TypeScript for calculating the statutory minimum wage for certain jobs based on various parameters such as date of application, place of job, date of birth, and job description. It also includes multi-language support (DE, FR, IT).

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)

## Features
- Calculate minimum wage based on various parameters
- Multi-language support (DE, FR, IT)
- Easy to extend and maintain
- API documentation available

## Requirements
- Node.js
- npm

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/codeoutin/min-wage-calculator.git
    cd min-wage-calculator
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create `tsconfig.json` if not present:
    ```json
    {
      "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "rootDir": "./src",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true
      },
      "include": [
        "src/**/*.ts",
        "src/types/**/*.d.ts"
      ],
      "exclude": [
        "node_modules"
      ]
    }
    ```

## Running the Server
To start the server in development mode, run:
```bash
npm run dev
```

## API Documentation
The API documentation is available and provides interactive access to the API endpoints. You can view and interact with the documentation by navigating to:
```
http://localhost:3000/api-docs
```

## Project Structure
```
min-wage-calc/
├── src/
│   ├── controllers/
│   │   └── wageController.ts
│   ├── middlewares/
│   │   └── errorHandler.ts
│   │   └── language.ts
│   ├── routes/
│   │   └── calculate.ts
│   ├── services/
│   │   └── wageService.ts
│   ├── utils/
│   │   ├── data.ts
│   │   └── language.ts
│   └── server.ts
├── types/
│   ├── swagger-jsdoc.d.ts
│   └── swagger-ui-express.d.ts
├── package.json
├── tsconfig.json
└── .gitignore
```