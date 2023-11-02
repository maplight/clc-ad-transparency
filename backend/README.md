# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

## Pre-requisites if you are cloning this repo
### Install Strapi
```
npm add @strapi/strapi
# or
yarn add @strapi/strapi
```
### Set up .env
Copy `.env.example` to `.env` and replace values with random strings

## Running the app
### `develop`
Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

### Building `ad-disclosure-report` plugin locally

1. Install plugin dependencies

```
cd src/plugins/ad-disclosure-report
yarn
```

2. Transpile TypeScript files to `dist`

```
yarn build
```

3. Rebuild project from root

```
cd ../../../
yarn build
```

4. Run in watch mode, which enables hot-reloading plugin

```
yarn develop --watch-admin
```

## Modifying the look and feel
### Text

1. Find the translation token for the text you are looking to change
```
 grep -inr --include \*.json "Text to change" ./node_modules/\@strapi
```
2. Add the token and new text to the [overide file](src/admin/app.tsx)
3. `yarn build`


## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

## Database

Transfer the production database into your local dev environment, replacing `PRODUCTION_ADMIN_URL` with the current production URL.

`yarn strapi transfer --from {PRODUCTION_ADMIN_URL}`

When prompted, copy and paste the Production Transfer Token from 1Password.

### Seeding the Database

The Strapi `bootstrap` lifecycle is configured to seed the database when the environment variable `STRAPI_SEED_DB_ON_BOOTSTRAP` is set to `true`. When this environment variable is set, the database will be seeded with 50 `adDisclosures` for each filer user present in the current instance of the system. While creating `adDisclosures`, the process will also upload media files for each user and attach them to the `adDisclosure`. Media files in the `public/ad-disclosure-media` directory will be split among the number of filer users in the current instance so that we can ensure unique media between users.

**Note:** This is a destructive action that cannot be reversed. Before seeding, the database will be cleared of all `adDisclosures`, `filingPeriods`, `reports`, and assets. Care should also be taken when running in development with the `--watch-admin` flag, as every restart of the server will cause the database to be reseeded.

## Algolia

The following environment variables are required to [initialize the Algolia search client](https://www.algolia.com/doc/api-client/getting-started/initialize/javascript/?client=javascript):

* `ALGOLIA_APPLICATION_ID`
* `ALGOLIA_ADMIN_API_KEY`

**NOTE:** The backend should use the Admin API Key from the Algolia dashboard in order to create and update indices.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
