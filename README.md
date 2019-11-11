# How Tos
## How to run: 
run:
- ``` node server```

run w/ nodemon:
- ``` nodemon server```

- ```localhost:3000```

___

## Docker

Description from https://nodejs.org/de/docs/guides/nodejs-docker-webapp/

### How to run w/ docker
- ```docker build -t tc1852/prototype .```

### How to see docker images
- ```docker images```

### How to run image
```docker run -p 3001:3000 -d tc1852/prototype```

### How to stop container
```docker stop <container_id>```

### How to print output:
Get container Id
```docker ps```
```docker logs <container id>```

### How to go inside the container:
```docker exec -it <container id> /bin/bash```

### How to use the redis cli:
```
docker exec -it <container id> /bin/bash
redis-cli
GET key1
TTL key1
flushall
SETEX foo 40 "I said, Hello World!"
SET foo "Hello World"
```

### How to push a new image to my repo:
```
docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname
```
- How to push it after the first time:
```
docker push tc1852/prototype:tagname
```

### How to upload image on docker hub
docker login && docker push tc1852/node-web-app
___

### Markdowns:
[Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links)