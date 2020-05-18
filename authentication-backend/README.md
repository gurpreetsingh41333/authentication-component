# authentication-backend
authentication backend made using Node.js, Express.js and MongoDB

## Contains:

* environment specific file - single place to configure app
* Environment specific API Call using Axios
* Environment configuration in package scripts
* separate containers

## Getting Started

**1. Clone the repository to your local machine by running:**

```bash
git clone https://github.com/gurpreetbirdi/authentication-component.git
cd authentication-component/authentication-backend
```

**2. Install all dependencies:**

```npm install``` or ```yarn install```

**3. Change Specific environment variable file:**

```{variable}.env``` ```dev||qa||stg||prod```

**4. Run the app:**

```npm run dev``` or ```yarn run dev```

Run server on port 3000 with HMR enabled or you can change port in webpack.config.js

**5. Build files for deployment:**

```npm run build:{variable}``` or ```yarn build:{variable}``` ```dev||qa||stg||prod```

Building app in the "build" directory. Contains the index.html with the minified assets, it's ready for production!.

                                                    **Happy Coding**