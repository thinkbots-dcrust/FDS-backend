## FDS-Thinkbots Server

//To-do IIC Description

### API Guide :-

####To Check if Server Running

[GET] /isServerRunning

####Continue With Google

Url - [POST] /users/google-auth
Body - {
	tokenId:"tokenId got from google auth on the frontend"
}