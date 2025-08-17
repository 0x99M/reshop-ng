# ReShopNg - Angular Ionic E-Commerce Frontend

This project is a modern e-commerce frontend application built with **Angular 20** and **Ionic 8**. It provides a responsive user interface for customers to browse products, manage a shopping cart, and place orders. It also includes administrative features for managing products and orders, secured by role-based authentication.

## Features

*   **User Authentication**: Login functionality for customers and administrators.
*   **Role-Based Access Control**: Different views and actions based on user roles (e.g., 'customer', 'admin').
*   **Product Catalog**: Browse and view available products.
*   **Shopping Cart**: Add/remove items and manage quantities.
*   **Order Placement**: Submit orders based on cart contents.
*   **Admin Panel**: (Implied by role checks) Manage products and view orders.
*   **Responsive Design**: Built with Ionic for a consistent experience across web, tablets, and mobile devices.

## Technologies Used

*   **[Angular 20](https://angular.io/)**: Core framework, utilizing the new standalone component API.
*   **[Ionic 8](https://ionicframework.com/)**: UI toolkit for mobile and desktop.
*   **[TypeScript](https://www.typescriptlang.org/)**: Strongly-typed superset of JavaScript.
*   **[RxJS](https://rxjs.dev/)**: For reactive programming.
*   **[Karma](https://karma-runner.github.io/) & [Jasmine](https://jasmine.github.io/)**: For unit testing.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

*   **[Node.js](https://nodejs.org/)**
*   **[npm](https://www.npmjs.com/)** (or [yarn](https://yarnpkg.com/))

This project also requires a backend API server to be running. The API endpoint is configured in `src/environments/environment.ts` (defaulting to `http://localhost:3000`).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url> # Replace <repository-url> with the actual URL
    cd reshop-ng
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or if you use yarn:
    ```bash
    yarn install
    ```

3.  **Ensure the backend API is running** on the configured URL (e.g., `http://localhost:3000`).

4.  **Start the development server:**
    ```bash
    npm start
    ```
    or
    ```bash
    ng serve
    ```
    Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Development

### Code Scaffolding

This project uses the Angular CLI for code generation. You can generate new components, services, etc., using:

```bash
ng generate component components/component-name
ng generate service services/service-name
# For a full list of schematics
ng generate --help
```

### Building

To build the project for production, run:

```bash
npm run build
```
or
```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

To execute the unit tests via Karma, run:

```bash
npm test
```
or
```bash
ng test
```

### Running End-to-End Tests

To execute the end-to-end tests, run:

```bash
ng e2e
```
*Note: You will need to set up an e2e testing framework (like Protractor or Cypress) as it's not included by default.*

### Code Style and Formatting

This project uses Prettier for code formatting. Configuration can be found in `package.json` under the `prettier` key.

## Project Structure

A brief overview of the key folders and files:

*   `src/`: Main source code folder.
    *   `app/`: Application-specific code.
        *   `components/`: UI components (e.g., pages, feature components).
        *   `services/`: Services for API communication and business logic.
        *   `types/`: TypeScript interfaces and types.
        *   `guards/`: Angular route guards.
        *   `interceptors/`: Angular HTTP interceptors.
        *   `shared/`: Shared utilities and code.
        *   `app.ts`, `app.html`, `app.css`: Root application component files.
        *   `app.routes.ts`: Application routing definitions.
        *   `main.ts`: Application entry point.
    *   `assets/`: Static assets (images, icons).
    *   `environments/`: Environment-specific configuration files.
*   `angular.json`: Angular CLI configuration.
*   `package.json`: Project dependencies and scripts.
*   `tsconfig.json`: TypeScript configuration.
*   `src/styles.css`: Global styles and CSS variables.