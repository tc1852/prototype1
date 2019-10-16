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
- ```docker build -t tc1852/node-web-app .```

### How to see docker images
- ```docker images```

### How to run image
```docker run -p 3001:3000 -d tc1852/node-web-app```

### How to stop container
```docker stop <container_id>

### How to print output:
Get container Id
```docker ps```
```docker logs <container id>

### How to go inside the container:
```docker exec -it <container id> /bin/bash

### How to upload image on docker hub
docker login && docker push tc1852/node-web-app
___

## How to set up a secondary ssh
1. Create a new ssh key:
    - ```ssh-keygen -t rsa -C “your-email-address”```
    - type in a new name line /Users/me/.ssh/id_rsa_github
skip passphrase

2. Copy SSH Key in ~/.ssh/id_rsa_github.pub
3. Put it in GitHub account -> Settings -> SSH and GPG keys -> New SSH key
4. From the project directory, run the following commands in the terminal:
    - ```ssh-add ~/.ssh/id_rsa_github```
    - ```git config user.name "github"```
    - ```git config user.email tonychoi.cs@gmail.com```

5. Check that the user section is updated by running this command
    - ```git config -e```

### Markdowns:
[Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links)