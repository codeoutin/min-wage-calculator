# Minimum Wage Calculation API

This project is a backend API built with Express.js and TypeScript for calculating the statutory minimum wage for certain jobs based on various parameters such as date of application, place of job, date of birth, and job description. It also includes multi-language support (DE, FR, IT).

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [License](#license)

## Features
- Calculate minimum wage based on various parameters
- Multi-language support (DE, FR, IT)
- Easy to extend and maintain

## Requirements
- Node.js
- npm

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/codeoutin/min-wage-calculator.git
    cd min-wage-calc
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
      "include": ["src/**/*.ts"],
      "exclude": ["node_modules"]
    }
    ```

## Running the Server
To start the server in development mode, run:
```bash
npm run dev
