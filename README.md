# adidas-product-reviews
 
## Setup 

Ensure that your node version 16 or above

Install dependencies 

```
yarn install
```

To ensure that the proxy server is running cd into node_modules/cors-anywhere and run the following command

```
node server.js
```
Running cors-anywhere ensures that cors issues are bypasts by adding necessary HTTP headers. 

Now open another tab in your terminal and run the following command

```
yarn dev
```

This will run the vite developement environment.

Now you are ready to access the application at http://localhost:3006/, enjoy :) 

Tests are created using Jest, to run tests run the following command

```
yarn test
```
