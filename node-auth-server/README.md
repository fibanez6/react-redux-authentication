# NODE USER/PASSWORD AND TOKEN AUTHENTICATION

Server setup - Authentication

[Advanced React-Redux tutorial](https://www.udemy.com/react-redux-tutorial) to display the weather forecast of a city.
This project cover section 6 of the tutorial.


### REQUIREMENTS
* [Node js](https://nodejs.org/en/)
* [Mongodb](https://www.mongodb.com/) 


### CONTENT
* Json Web Token
* Passport module 
    - Strategies for authentication
* Nodemon module
    - to restart automatically the server after saving any change
* bcrypt-nodejs module 
    - to encrypt password in database)
* mongoose module
    - To interact with Mongodb



### INSTALLATION

```
> git clone https://github.com/fibanez6/react-redux-authentication
> cd react-redux-authentication/node-auth-server
> npm install
> npm start
```

### RUN
```
> node bin/www
```


## Example

SIGNUP
```
Request:
curl --request POST \
  --url http://127.0.0.1:3000/signup \
  --header 'Accept: */*' \
  --header 'Content-Type: application/json' \
  --data '{\n	"email": "fibanez@fibanez.com",\n	"password": "asdads"\n}'
  
Response:
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZGExZmQ4Mzk3Y2NhOTVkMTc2ZmU3MGYiLCJpYXQiOjE1NzA4OTcyODM2NTF9.DFaJbRuWoCLqVmZQIXwkuCs1xDpLMMjZmeXS34oSqKI"
}
```