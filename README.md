
# Blog Website Using React and React Context API

## Overview

This project is a static blog website built using React to showcase the power and efficiency of the React Context API. It allows users to browse and read a collection of static blog posts while demonstrating how to manage global states in a React application without prop drilling.

## Features

- React Context API
- Static Blog
- Efficient Data Flow

## Getting Started

### Prerequisites

To run this project locally, you need to have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blog-website
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the Application

To start the application locally, run:

```bash
npm start
```

or

```bash
yarn start
```

The application will be running on [http://localhost:3000](http://localhost:3000).

### Build for Production

To build the app for production, run:

```bash
npm run build
```

This will create an optimized build in the `build/` directory.

## What is React Context API?

The React Context API is a tool for managing global states in a React application without having to pass data manually through several levels of components (prop drilling). It allows you to share state across different parts of your app efficiently.

### How React Context API is Used in This Project

In this blog website, the React Context API is used to manage the state of blog data and user preferences globally. Here’s a breakdown of how it’s implemented:

1.Context Creation: A context is created using React.createContext() to hold the state of the blogs and any global data required by the components.

2.Context Provider: The ContextProvider wraps the entire application, providing access to the global state throughout the component tree. This eliminates the need to pass props manually to each component.

3.UseContext Hook: Inside individual components, the useContext() hook is used to consume the context and access the necessary state and functions.

This setup ensures that all components, regardless of their nesting level, have access to the global state without the need for prop drilling.

## Folder Structure
/src
  /components
    - Blog.js
    - Card.js
    - Header.js
    - Pagination.js
    - Spinner.js
  /context
    - AppContext.js
  App.js
  index.js
