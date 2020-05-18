# authentication-ui
authentication UI made using react-redux-router-hooks-starter-kit

## Contains:

* environment specific file - single place to configure app
* webpack is used for bundling the app
* react-router configuration with private routing
* Redux setup with thunk middleware
* Code splitting using @loadable/component
* Environment specific API Call using Axios
* Environment configuration in package scripts
* separate containers and components

## Getting Started

**1. Clone the repository to your local machine by running:**

```bash
git clone https://github.com/gurpreetbirdi/authentication-component.git
cd authentication-component/authentication-ui
```

**2. Install all dependencies:**

```npm install``` or ```yarn install```

**3. Create new environment variable file:(Reference file- .env.example)**

```.env.{variable}``` ```dev||qa||stg||prod```

**4. Run the app:**

```npm start``` or ```yarn start```

Run webapp on port 3001 with HMR enabled or you can change port in webpack.config.js

**5. Build files for deployment:**

```npm run build:{variable}``` or ```yarn build:{variable}``` ```dev||qa||stg||prod```

Building app in the "build" directory. Contains the index.html with the minified assets, it's ready for production!.

                                                    **Happy Coding**