# Family Recipes Web Application

Family Recipes is a web application that allows you to create an account and store all your cherished family recipes in one secure place. With the ability to add, edit, and delete recipes, this app makes it convenient for you to organize and preserve your family's culinary traditions.

## Video Demo

https://github.com/gvasquez11/family-recipes/assets/36422346/793c57e1-3d3a-4cc3-809f-97d79d6f7831

## Introduction

As families grow and evolve, traditional recipes can become scattered and hard to access. Family Recipes aims to solve this problem by providing a user-friendly web application where you can store and manage all your family's recipes with ease. Create an account, log in, and start preserving your culinary heritage today!

## Features

- User authentication: Create an account and log in securely using bcrypt for password hashing and passport-local for local authentication strategy.
- Session management: Utilize express-session to manage user sessions and keep users logged in.
- Recipe management: Add, edit, and delete recipes to maintain an organized collection of your family's culinary treasures.
- Flash messages: Implement express-flash to display informative messages to users after certain actions or events.
- MongoDB integration: Connect with MongoDB using mongoose and connect-mongo to store user and recipe data securely.
- Input validation: Use validator to validate user inputs and ensure data integrity.

## Installation

Follow these steps to get the Family Recipes web application up and running on your local machine:

1. Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/gvasquez11/family-recipes
```

2. Navigate to the project directory:

```bash
cd family-recipes
```

3. Install the required dependencies using npm (Node Package Manager):

```bash
npm install
```

4. Create a `.env` file in the root directory and provide the necessary environment variables:

```env
PORT= 1073
DB_STRING =your_mongodb_connection_string
```

5. Start the application:

```bash
node server.js
```

6. Open your web browser and visit `http://localhost:1073` to access the Family Recipes web application.

## Usage

- Create an account: Sign up with your email and a secure password to start using the application.
- Log in: Log in to your account using your registered credentials.
- Add a recipe: Once logged in, you can create a new recipe by providing the necessary details such as recipe name, ingredients, and instructions.
- Edit a recipe: Easily update existing recipes if any changes are needed.
- Delete a recipe: Remove recipes from your collection that are no longer needed.

## Dependencies

Family Recipes is built using the following packages and dependencies:

- bcrypt
- connect-mongo
- dotenv
- ejs
- express
- express-flash
- express-session
- mongodb
- mongoose
- morgan
- nodemon
- passport
- passport-local
- validator

Make sure you have these dependencies installed before running the application.

## Contributing

We welcome contributions to enhance the functionality of the Family Recipes web application. If you find any issues or have new features to add, feel free to open an issue or submit a pull request. We appreciate your help in making this app even better!

## License

The Family Recipes web application is open-source and uses the [MIT License](LICENSE). Feel free to modify and distribute the code as per the terms of the license.

---
