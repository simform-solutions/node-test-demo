# Prerequisite
  node 6+
  mongo 3.6
  express 4
# Get started
Goto `config.js` and modify your `dbUri` url

# npm commands
  - `npm install` to install all dependencies
  - `npm run seed` to seed the db
  - `npm run start` to run the project
  - `npm run lint` to run lint 

Following endpoints are exposed as REST APIs
run by prefixing `localhost:10001/api`

## Create
POST /post/create

## get one (by ID)
GET /post/getPost/:id

## get all
GET /post/getAllPost

## update
PUT /post/update/:id

## delete
DELETE /post/delete/:id

## postman collection
`https://www.getpostman.com/collections/8690e49fa0973ba4cdbd`