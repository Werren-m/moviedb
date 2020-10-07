RESTful endpoint for User's CRUD operation
JSON formatted response

GET /user/

GET User details
Request Header{
"token": "<your access_token>"
}
Request Body{
not needed
}
Response (200){
"id" : 1,
"name" : "<asset name>",
"email" : "<asset email>",
"password" : "<asset password>",
"image" : "<asset image>",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
Response (400 - Bad Request){
"message": "<returned error message>"
}

---

GET /user/edit

GET User to edit
Request Header{
"token": "<your access_token>"
}
Request Body{
not needed
}
Response (200){
"id" : 1,
"name" : "<asset name>",
"email" : "<asset email>",
"password" : "<asset password>",
"image" : "<asset image>",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
Response (400 - Bad Request){
"message": "<returned error message>"
}

---

PUT /user

PUT update user

Request Header{
"token": "<your access_token>"
}

Request Body{
"name": "<asset name>",
"email": "<asset email>",
"password": "<asset password>",
"image" : "<asset image>"
}

Response (200 - OK) {
"token": "<your access_token>"
}

Response (400 - Bad Request){
"message": "<returned error message>"
}

---

DELETE /user/

DELETE User
Request Header{
"token": "<your access_token>"
}
Request Body{
not needed
}
Response (200){

}
Response (400 - Bad Request){
"message": "<returned error message>"
}

---

POST /register

POST User to register
Request Header
not needed

Request Body{
"name": "<asset username>",
"email": "<asset email>",
"password": "<asset password>"
"image": "<asset image>"
}
Response (201)[
{
"token": "<your access_token>"
}
]
Response (400 - Bad Request){
"message": "<returned error message>"
}

---

POST /login

POST User to login
Request Header{
not needed
}
Request Body{
"email": "<asset email>",
"password": "<asset password>",
}
Response (201 - Created){
"token" : "<your access_token>"
}
Response (400 - Bad Request){
"message": "<returned error message>"
}
