# Own Wallet

Just a simple expense count App that is used to count daily consumption. 

Full stack app Created with [Next.js](https://github.com/vercel/next.js) and [Drizzle](https://github.com/drizzle-team/drizzle-orm).

## Setup


### Start locally
Please add a database URL (Postgresql) to the `.env` file before starting the app

To use it locally: 

`yarn dev` 

### Start By Docker

Make sure you have installed docker

and at the root of the repo

`docker compose up`

A container setup with the nextjs application and a PostgreSQL db will be build 

The NextJs application will be hosted at `localhost:3000` and the database will be hosted at `localhost:5432`. You can modify the port in the `compose.yaml` file.