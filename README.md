# Tech hour

A simple web application designed to demonstrate how to build a web application using php Symfony and React.JS

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The configuration I used to run the project. 

```
Operating System: Ubuntu 18.04.2 LTS (Bionic Beaver)
php 7.3.8
mysql 5.6.29
yarn 1.16.0
npm 6.13.6
composer 1.6.3
make 4.1
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Firstly, open a shell at the root of the project and run the following command

```
make install
```

You will have to configure the .env to make the project working.

In order to do this, open it and replace
* "user" by your mysql user.
* "pass" by your mysql password.
* "db_name" by a database name of your choice.

_Change IP and Port if needed._
```
DATABASE_URL=mysql://user:pass@127.0.0.1:3306/db_name
```

Secondly, you have to create the database, update the database schema and insert testing data by running the following commands at the root of the project.
```
php bin/console doctrine:database:create
php bin/console doctrine:schema:update --force
php bin/console doctrine:fixtures:load
```

Finally, run  ``` make ```, wait, click on the [URL](http://localhost:8000) to open the page and test the project locally.

## Built With

* [Symfony 4.3](https://symfony.com/doc/4.3/index.html) - The php framework used
* [React.JS](https://en.reactjs.org/docs/getting-started.html) - The front-end javascript library


## Author

* **Thibaut Trouvé** - *Fullstack developer* - [Frostiz](https://github.com/frostiz)