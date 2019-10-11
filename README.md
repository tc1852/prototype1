# How Tos
## How to run: 
run:
- ``` node server```

run w/ nodemon:
- ``` nodemon server```

- ```localhost:3000```


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