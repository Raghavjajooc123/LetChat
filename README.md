# LetChat


This is a Real-time chat bot app which is created by using HTML, CSS, Javascript in the Frontend, Node.js and socket.io for Backend, and Bootstrap to create the better user interface.

[LetChat](https://letchat-heroku.herokuapp.com)

## Features

- Allows only users with passwords.
- Can allow multiple people to chat on the interface.
- Allows you to send and recieve messages.

## Deployment

To deploy this project run

```bash
  node app.js
```


## Hosting the project online

Install the Heroku CLI
Download and install the Heroku CLI.

Log in to your Heroku account and follow the prompts to create a new SSH public key.

```bash
  $ heroku login
```

Create a new Git repository
Initialize a git repository in a new or existing directory

```bash
$ cd my-project/
$ git init
$ heroku git: remote-a movie-central-heroku
```

Existing Git repository
For existing repositories, simply add the heroku remote
```bash
$ heroku git: remote -a movie-central-heroku
```

Deploy your changes
Make some changes to the code you just cloned and deploy them to Heroku using Git.

```bash
  $ git add .
  $ git commit -am "make it better"
  $ git push heroku master
```
