# MIDDLEWARE

This directory contains Middlewares.
The middleware lets you define custom function to be ran before rendering a page or a group of pages (layouts).

Allows treatment before going to a resource.
The middleware is a function that takes 3 argument : req, res, next.
- req: request injected by express
- res: response
- next: the function that need to call if conditions are respected

For more info look express middleware info: [here](http://expressjs.com/fr/guide/using-middleware.html)