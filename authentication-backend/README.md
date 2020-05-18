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

**3. Create new environment variable file:(Reference file- config/example.env)**

```{variable}.env``` ```dev||qa||stg||prod```

**4. Run the app:**

```npm run dev``` or ```yarn run dev```

Run backend server on port 3000 with HMR enabled

**5. Build files for deployment:**

```npm run build:{variable}``` or ```yarn build:{variable}``` ```dev||qa||stg||prod```


                                                    **Happy Coding**