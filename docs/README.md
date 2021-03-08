# A simple skeleton for bot applications in Node.js


## Docker

### Start all services

```
    docker-compose up
```

### Or start service required

``` 
    docker-compose up -d mysql
    docker-compose up -d phpmyadmin
    docker-compose up -d ngrok
    docker-compose up -d nodejs-app    
```

### This allows you to enter a running container:

```
    docker exec -it [container-id] bash
```

## Ports

| PORT | EXPOSED | PROTOCOL | Description |
| ------ | ------ | -------- | --- |
| **3005** | **3005** | TCP |  NodeJS App |
| **4040** | **4040** | TCP |  Ngrok |
| **80** | **8085** | TCP |  PhpMyAdmin |
| **33065** | **3306** | TCP |  Mysql |

## Folders & Files :

| FOLDER / FILE | Description |
| ------ | ------  |
| **/.env** | This file contain your enviroment vars for the NodeJS app |
| **/docker/.env** | This file contain your enviroment vars for the container |
| **/docker/database** | The mysql container data |
| **/docker/ngrok** | The ngrok container data |
