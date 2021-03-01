---
title: Development & Building
---

# Development
:::info PLEASE NOTE
If you want to develop features for the `frontend` you **have to** also setup an `backend` environment. Otherwise if you want to
develop features for the `backend` you **don't have to** setup a `frontend` environment. 
[Read more](./devAndBuilding#only-going-to-develop-features-for-the-backend).
:::

---
## Frontend
### Requirements
+  Approximately 3GB hard disk space
+  Node (Personally I recommend [nvm (Node version manager)](https://github.com/nvm-sh/nvm))
+  Git

### Setup
1.  Clone DatePoll-Frontend from the git repository
    ```
    git clone https://gitlab.com/DatePoll/datepoll/datepoll-frontend.git
    ```
1.  Install all dependencies
    ```
    npm install
    ```
1.  **ONLY IF YOU WANT TO CREATE PRODUCTION BUILDS OR WORK ON TRANSLATIONS**
    
    Generate language files. [Read more about it here](./translations).
    :::warning
    **On the first time, translations can take up to 30 minutes.**

    Please consider that the translation server hasn't unlimited resources. If it's getting abused it's going to be
    **rate limited**. Translated strings are **cached** to minimize server usage. **Don't delete** the cache files
    located in `translation/`.
    :::
    ```
    chmod +x ./languages.sh && ./languages.sh
    ```

### Starting the development server
```
ng serve
```
You can now access DatePoll via a browser under [http://localhost:4200](http://localhost:4200).
:::note Good to know
For a **fully functional** DatePoll development setup you also need a working backend environment.
:::
---
## Backend
### Requirements
+   Approximately 4GB hard disk space
+   Git
+   Docker Compose
    ```
    sudo apt install docker-compose
    ```
+   [Docker](https://docs.docker.com/install/linux/docker-ce/debian/)

### Setup
:::note Good to know
We also need to setup [DatePoll-Dockerized](https://gitlab.com/DatePoll/DatePoll/DatePoll-Dockerized).

This ensures we are using a dev environment **as close as possible** to a production environment. 
Also we terminate possible bugs and ensure everyone has the same environment.
:::

1.  Clone DatePoll-Dockerized from the git repository
    ```
    git clone https://gitlab.com/DatePoll/datepoll/datepoll-dockerized.git DatePoll-Dockerized
    ```
1.  Clone DatePoll-Backend-PHP from the git repository
    ```
    git clone https://gitlab.com/DatePoll/datepoll/datepoll-backend-php.git DatePoll-Backend-PHP
    ```
1.  Fill in your **own** absolute paths to create a working symlink from `DatePoll-Backend-PHP/` 
    to `DatePoll-Dockerized/code/backend/` 
    ```
    ln -s /home/your/path/DatePoll-Backend-PHP/ /home/your/path/DatePoll-Dockerized/code/backend/
    ```
1.  Open the `DatePoll-Dockerized` folder and start all containers. (This can take some time)
    ```
    cd DatePoll-Dockerized/ && sudo docker-compose build && docker-compose up -d
    ```
1.  Copy the environment file into place
    ```
    copy ./code/backend/.env.dockerized ./code/backend/.env
    ```
1.  Install all required composer libraries and run all database migrations
    ```
    docker-compose exec datepoll-php php /usr/local/bin/composer && docker-compose exec datepoll-php php artisan migrate --force
    ```
1.  Run the setup command to set all environment files
    ```
    docker-compose exec datepoll-php php artisan setup-datepoll && docker-compose exec datepoll-php php artisan update-datpoll-db
    ```
1.  Add an admin user for the first login. **The username and password will be printed to the terminal.**
    ```
    docker-compose exec datepoll-php php artisan add-admin-user
    ```

You can now access the DatePoll-Backend via a browser under [http://localhost:9130](http://localhost:9130) and the API
under [http://localhost:9130/api](http://localhost:9130/api).

#### Only going to develop features for the backend?
Than you can use pre-build frontend versions. Quickly install the latest frontend **production** version with
```
chmod +x ./scripts/* && ./scripts/frontend.sh
```
or the latest frontend **development** version with
```
chmod +x ./scripts/* && ./scripts/frontend.sh -v dev
```
You can now access the DatePoll frontend via a browser under [http://localhost:9110](http://localhost:9110).

:::success
**Congratulations!** You have a **fully working** development environment.
:::

### Development server
#### Restarting DatePoll-Dockerized
If you change something in the queue or mail system of DatePoll-Backend-PHP you have to restart all containers.
```
docker-compose restart
```
#### Starting DatePoll-Dockerized
```
docker-compose up -d
```
#### Stopping DatePoll-Dockerized
```
docker-compose down
```
#### Building DatePoll-Dockerized
```
sudo docker-compose build
```
#### Docker container monitoring
Because it's sometimes really painful to monitor or read log files out of containers I personally recommend to install
[lazydocker](https://github.com/jesseduffield/lazydocker).

---
# Building
## Frontend
Builds are managed with the [`.gitlab-ci.yml`](https://gitlab.com/DatePoll/DatePoll/datePoll-frontend/-/blob/master/.gitlab-ci.yml)

### Production 
Production releases are builded if a commits happen on the `master` branch. The builds are accessible on 
[releases.datepoll.org/DatePoll/Frontend-Releases](https://releases.datepoll.org/DatePoll/Frontend-Releases/).

The latest version is always accessible as this file
[DatePoll-Frontend-lastest.zip](https://releases.datepoll.org/DatePoll/Frontend-Releases/DatePoll-Frontend-latest.zip).

On a **working** DatePoll setup you can update your frontend with this command:
```
./scripts/frontend.sh
```

### Development
Development releases are builded if a commits happen on the `development` branch. 

The latest dev version is always accessible as this file
[DatePoll-Frontend-dev.zip](https://releases.datepoll.org/DatePoll/Frontend-Releases/DatePoll-Frontend-dev.zip).

On a **working** DatePoll setup you can update your frontend with this command:
```
./scripts/frontend.sh -v dev
```

### Manual
:::note
Make sure that all language files have been generated. [Read more here](./translations.md).
:::
```
ng build --prod
```

---

## Backend
"Builds" are managed with branches in the [GitLab Repository](https://gitlab.com/DatePoll/DatePoll/datepoll-backend-php/-/branches).

Because PHP doesn't really build your code before shipping it, the install or update process is a little bit different.

### Production
The production version of the DatePoll-Backend code is always on the 
[`master`](https://gitlab.com/DatePoll/DatePoll/datepoll-backend-php/-/tree/master) branch of the repository.

On a **working** DatePoll setup you can update your backend with this command:
```
./scripts/backend.sh
```

### Development
The development version of the DatePoll-Backend code is always on the
[`development`](https://gitlab.com/DatePoll/DatePoll/datepoll-backend-php/-/tree/development) branch of the repository.

On a **working** DatePoll setup you can update your backend with this command:
```
./scripts/backend.sh -v dev
```
