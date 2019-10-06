[![Dependency Status](https://david-dm.org/zahreva/express-starter/status.svg?style=flat)](https://david-dm.org/zahreva/express-starter) [![devDependencies Status](https://david-dm.org/zahreva/express-starter/dev-status.svg)](https://david-dm.org/sahat/hackathon-starter?type=dev)

### Lightweight Express.js starter

---

To start application run `npm run start:dev`

#### Features:

- Routes are being generated automatically from folder `src/routes`.
- Custom error handler with error codes, statuses and messages (src/utils/error-hanlder).
- Request validator middleware.
- Alias configuration. Example: `require('#utils')` instead of `require('../../../../utils')`. Configuration is located in `package.json/_moduleAliases`.
- Husky pre-commit linting stage.
- Git-cz + cz-emoji configuration. Simply run `npm run commit` to commit all unstaged files.

---

#### App structure:

    src
    ├── config
    │   └── ...
    ├── middlewares
    │   └── ...
    ├── routes
    │   └── v1 // API Version
    │       ├── bots
    │       │   ├── get.js // HTTP GET controller => GET ../v1/bots
    │       │   ├── post.js // HTTP POST controller => POST ../v1/bots
    │       │   ├── router.js // Current route endpoint declaration
    │       │   ├── schemas.js // Validation schemas
    │       │   └── {{id}} // Analogue of Express.js path parameters declaration  ../v1/bots/:id
    │       │       ├── get.js // Example: GET ../v1/bots/1337
    │       │       └── router.js
    └── utils
        └── ...
