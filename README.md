# NLW04-NodeJs-Server

## Installing
```
$ yarn
```
Or:
```
$ npm install
```

## Configuring
The application use: [SQLite](https://www.sqlite.org/index.html).

The application use: [Typeorm](https://typeorm.io/#/using-ormconfig).


#### Migrations
Run the database migrations:

```
$ yarn typeorm migration:run
```
# Usage
To start up the app run:
```
$ yarn dev
```
Or:
```
$ npm run dev
```
## Routes
|route|HTTP Method|params|description
|:---|:---:|:---:|:---:
|`/users`|POST|Body with user `name` and `email`.|Create a new user
|`/surveys`|GET| - |Lists surveys.
|`/surveys`|POST|Body with user `title` and `description`.|Create a new survey
|`/send_mail`|POST|Body with user `email` and a `survey_id`.|Send the NPS to provided user
|`/answers`|GET| - |List survey answers
|`/answers/:value`|GET|survey `value` url parameter and survey user `id` query parameter.|Set user's avaliation to one survey
|`/nps/:survey_id`|GET|`survey_id` url parameter.|Show survey NPS

----
## Running the tests
The application use: [Jest](https://jestjs.io/).
```
$ yarn test
```
Or:
```
$ npm run test
```
