## To-Do Application Challenge

**Design**: It is up to you, but it needs to work on both desktop and mobile.

**Frontend**: Any Javascript framework, but we prefer React (https://github.com/JeanHules/react-boiler-plate).

**Backend**: Any PHP framework, but we prefer Laravel (https://github.com/JeanHules/laravel-boiler-plate)

**Review**: This challenege is meant to see what you can do as a developer but also how well you can handle design on your own. We do not use designers at Prep Network, so you are the developer and designer. It is okay to use inspiration from other websites or even use an HTML template; We don't really care, but the app must function on both desktop and mobile.

In this role, you will often be the designer, frontend and backend developer. Build your application to meet the requirements below, but feel free to add functionality if you think there should be more. You are the creator of this product and we want to see not only how you design and code, but how you think and solve problems.

You can make your application as simple or complex as you want. Do not overthink it, but know that we want something built with lightweight code that is powerful for the user, and scalable for the company.

-   Create an account
-   Create a To-Do item
-   Edit a To-Do item
-   Delete a To-Do item
-   Complete a To-Do item
-   Uncomplete a To-Do item
-   Tag or Categorize an item
-   Search
-   Logout
-   Anything else you see that would create a plea

## Instructions

-   Fork the code from [This Repo](https://github.com/JeanHules/prephoops-todo-app) which has both the Laravel and React repos setup as submodules.
-   In a terminal window, run the instruction for the react application
-   In another terminal window, start the laravel application (See here for getting started with Laravel: https://laravel.com/docs/7.x)
-   On successful setup, you should see "Welcome To The Prep Network Challenge"
-   Create an API using a PHP framework as your backend
-   Once finished, create a pull request. Once you have done that, we will review your code.

## Get Started

```
git clone git@github.com:JeanHules/prephoops-todo-app.git
cd prephoops-todo-app
git submodule update --init --recursive
cd react-boiler-plate
yarn
yarn dev
```

CREATE DATABASE TABLE CALLED todo ON LOCALHOST

```
cd laravel-boiler-plate
mv .env.example .env
composer install
php artisan key:generate
php artisan serve
```

Go to localhost:8080 to see running site. It should say, "Welcome To The Prep Network Challenge"
