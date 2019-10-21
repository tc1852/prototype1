## Things to install
1. Apps: Google Chrome, Visual Studio Code (Docker, ESLint, GitLens), Postman, Docker, Github
2. node js (nvm? brew?)
3. 



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