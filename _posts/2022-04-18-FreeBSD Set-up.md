---
title: Running WebApp on FreeBSD
date: 2022-04-18 09:00:00 -0500
author:
  name: Mateo Ortegon
  link: https://teoo.io
categories: [Usage, FreeBSD]
tags: [freebsd, usage]
toc: true
math: true
mermaid: true
---

To run the application in FreeBSD, you need to follow the steps below. Running the application in FreeBSD is much more complicated
than running on Debian Linux distributions - these instructions assume you have familiarity with setting up FreeBSD and deploying applications.
The steps for deploying in Ubuntu are similar but work much more reliably.
>**NOTE:** This application is designed to be accessed only on `localhost`. As such the API only listens on interface `127.0.0.1` - this is hard-coded in `main.rs`.
>
> Additionally, the front end sends API requests to `localhost:3030`, this is hardcoded in the `App.vue` file of each page in the UI.
>
> To serve this publicly, the API must be exposed, and listening on the right interface (`0.0.0.0` for good measure).
> The UI also needs to be edited to send requests to the API, wherever it is hosted.

## Install Requirements
### Rust
Run the following command to install Rust.
>**Note:** this command is piping the script into `sh`. You may have to manually add the path to the Cargo binaries to
> your `$PATH` variable for the `cargo` commands to work.

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
### General Dependencies
Use the `pkg` package manager to install postgres.
>**NOTE:** Follow the FreeBSD specific instructions on initializing Postgres and enabling Postgres on boot.
> You will also have to set up the Postgres database and permissions.
```shell
pkg install -y postgresql-13
```

### NodeJS + `npm`
Follow online documentation to install the latest version of NodeJS and NPM.

### Diesel CLI
Diesel is the ORM for the Rust API. Use Cargo to install Diesel CLI.
```shell
cargo install diesel_cli --no-default-features --features postgres
```

## Set up
### Run Migration
This command will set up the database in Postgres using the schema - assuming you are in the root directory of the application. This also
assumes postgres is listening on port `5432` with username `USER` password `PASSWORD` and database `DB_NAME`. This user and appropriate permissions
must be set-up ahead of running the migration.
```shell
diesel migration run --migration-dir ./api/migrations --database-url postgres://USER:PASSWORD@0.0.0.0:5432/DB_NAME
```

### Run Tests
As a sanity check, run the Test suite to make sure the API is able to interact with the database.
>**Note:** Ensure the `.env` file in the `./api` contains the proper credentials for the Postgres DB - these are what the API will use when running.

```shell
cargo test --manifest-path ./api/Cargo.toml
```

### Clean Stale API Binaries
Inside the  `./api` folder, run the following command to clean stale binaries.
```shell
cargo clean
```

### Build the API Binaries
Inside the  `./api` folder, use the following command to build fresh binaries.
```shell
cargo build
```

### Install UI Dependencies
Inside the  `./ui` folder,  use `npm` to install the UI dependencies.
```shell
npm install
```

### Build the UI
Inside the  `./ui` folder, run the UI build script.
```shell
npm run build
```

### NGINX
#### Copy Built UI to Web-Root
From the `./ui` folder, copy the built UI files to the web-root directory of Nginx (`/usr/local/www/nginx/`).
```shell
cp -r ./ui/dist/* /usr/local/www/nginx/
```

#### Set up Server for Paging
First stop the server.
```shell
service nginx stop
```
Then add the code below to the NGINX config file `/usr/local/etc/nginx/nginx.conf` inside `server { }`. This will allow `https://localhost/stats`
to map to `https://localhost/stats.html`. Vue builds the multi-page application as different files, not different folders, so this step is necessary.
```shell
location /stats {
  rewrite ^/stats$ stats.html;
}
```
And start the server.
```shell
service nginx reload
```

>**NOTE:** In addition to this, in FreeBSD you will have to change Nginx permissions accordingly to allow Nginx access to the multiple static page files.
> By default it will only serve index.html

## Run the Application
### Run the API
Inside the  `./api` folder, run the API using the following command.
```shell
cargo run
```

### Run the Front-End
The front end should already be serving on port 80 if NGINX is running. To check if NGINX is running use the following command.



