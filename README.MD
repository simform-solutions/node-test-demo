# Get started
Goto `config.js` and modify your `dbUri` url

# npm commands
  - `npm install` to install all dependencies
  - `npm run start` to run the project
  - `npm run lint` to run lint 
  - `npm run seed` to seed the db

Following endpoints are exposed as REST APIs
run by prefixing localhost:10001
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

