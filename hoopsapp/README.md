#HOOPS APP

HOOPS APP is a creation of Server Side Rendered (SSR) dynamic Web-Apps that handle and display dynamic data users can create register, Task Mangement, Player Stats and have them be able to create user specific data, dashboards etc.

# Getting started

To get things working, we must configure both the backend (Laravel) and the frontend (Next.js) properly.

# Backend settings

# Environment variables

Navigate to the root directory.

use command


```
cp .env.example .env
```

Now open the `.env` file and fill in the values as needed. You might notice that the file is very similar to the default `.env` file that ships with Laravel, These configurations are necessary in order to hook the backend up to the frontend.
If you run your frontend on the default URL and Port (http://localhost:3000), you only need to replace the XXXXXXXXXXXXXXXX in the example file. If you do not want to use the Next.js default URL and Port, you also need to adjust the `SANCTUM_STATEFUL_DOMAINS` variable. Please only provide ONE value here. This means NO comma separated URLs.


# Migrations

you are probably familiar with `artisan` if you have used laravel. In order to prepopulate our database with all the necessary tables, you must execute the following command:

```
php artisan migrate --seed
```



Once this is done, we can move to the frontend environment settings

# Frontend setup

# Environment variables

We now take care of settings up our frontend. Therefore, navigate to the `/client` directory, where our Next.js app is located.
First things first, we need to run `npm install` or ‘yarn’ to install all our dependencies.
Next, copy and paste the `.env.local.example` file and rename it to `.env.local`

cd client
& then update enviorment
cp .env.local.example .env.local

Next.js can handle the `.env.local` file out of the box and even allows us to access the environment variables in the browser. For more information visit their [environment variables documentation](https://nextjs.org/docs/basic-features/environment-variables).

`NEXT_PUBLIC_API_HOST_URL` is the URL and host our Laravel API runs on. It defaults to `http://localhost:8000`. Customize it to your requirements.

`NEXT_PUBLIC_USER_HOME_ROUTE` is the home route for authenticated users, as the name indicates. It is the route a user will be redirected to after authentication, for example.



#### TypeScript

The app is written with TypeScript. If you instead want good old Javascript you must change all file extensions from `.tsx` to `.jsx` or `.js`. You then also have go through all the files and delete TypeScript specific syntax. My advise would be to leave it as it is and just use the `.js` extension in the files you create, if you don't want to use TypeScript.

# config.tsx

You might have already noticed that there is a file named `/client/config/config.tsx`, which does not ship with Next.js by default. This file handles some default configurations for us.
I used `axios` to make api requests and make some default configurations that our Laravel backend requires.

Also, we export a variable named `protectedRoutes`. It is an array of routes/slugs that will not be accessible for unauthenticated users. The list also respects sub-routes, which means if we include „/dashboard", „/dashboard/usertasks" or „/dashboard/usertasks/create" will be protected as well.

For example:


export const protectedRoutes = [
process.env.NEXT_PUBLIC_USER_HOME_ROUTE, // -> default
"/profile",
"/accout",
// and so on...
];
```

Customize this file according to your needs.

### Launching the app

You are now ready to launch the application!
In order to get backend and frontend running at the same time, you need two terminal windows.
In one, navigate to the root directory of your project and execute

```
php artisan serve
```

In the second terminal, navigate to `/client` and execute

```
npm run dev
```

The two commands powers up your enviorment

Now navigate to the frontend URL. You now see the homepage. You may register a new user under `/user/register` or login at `/user/login`.



## Authentication

### Registration

A new user can be registered under `/user/register`.
The following requirements must be pleased in order for the form to be submittable:

- Name only contains letters
- Email is valid and does not include „@email" or „@example"
- Password must be at least 8 characters long and may not contain „123456" or „passwor".
You can adjust the requirements under `/client/services/UserValidator.tsx`.

If the registration was successful, the user will be redirected to the user home route (defined under `/client/.env.local`).
If the registration failed (for example because the email is already taken), a proper error message will be displayed. If configured, the user will also receive an email to verify her email address (see section „Email verification").

If an already authenticated user tries to access `/user/register` she will be redirected to the user home route.

### Login

A user can login under `/user/login`. If the login was successful, the user will be redirected to the user home route (defined under `client/.env.local`). If the login fails, a proper error message will be displayed.

If an already authenticated user tries to access `/user/register` she will be redirected to the user home route.
