# Server (API)
  > Back end for the raspiwatch

## How to use

``` bash
# install dependencies
npm install

#run the server
npm start
```


## Configure database

In file config/config.js change **db.user**, **db.password** and **db.database** or just create a database called **raspiwatch**



## HTTP API

Here is listed all the operations available in this RESTful API.

### Authentification service :

|Method          |Path                           |
|----------------|-------------------------------|
|POST            |`/authenticate`                |

Check if the informations provided matche the informations stored in the database


### Registration service :

|Method          |Path                           |
|----------------|-------------------------------|
|POST            |`/register`                    |

Send the new user informations in the database


### Camera controls

|Method          |Path                           |
|----------------|-------------------------------|
|POST            |`/connect`                     |
|POST            |`/startDetection`              |
|POST            |`/stopDetection`               |

This routes allow respectively to connect to the camera, start the movement detection and stop it.
