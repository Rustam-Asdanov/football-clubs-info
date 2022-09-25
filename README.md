# About The Project

This web application oriented to the football fans. There you can find
information about current football clubs and about their
players. Also you can create your own club and add them your players.

## Build With

- [![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/en/5x/api.html)
- [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/docs/)
- [![Javascript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/docs/)
- [![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/cssref/default.asp)

# Getting Started

## Prerequisites

For the best performance of this Web Application on your computer you must install - Node, NPM and MongoDB.

1. [How install Node and Npm] - (https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac)
2. [How install MongoDB] - (https://www.mongodb.com/docs/manual/administration/install-community/)

3. After installation download project as a zip file or clone the reqo:

```sh
 git clone https://github.com/Rustam-Asdanov/player_cards
```

4. Install NPM packages

```sh
 npm install
```

5. In the line 31 in app.js instead of (`process.env.MONGO_URL`) use your link for the connection to MongoDB server, also create DataBase there.
   Watch [this] (https://mongodb.github.io/node-mongodb-native/3.4/tutorials/connect/)

6. Extra. You can use [this file] (https://github.com/Rustam-Asdanov/player_cards/blob/main/starter-base.json) for creating some teams and players. Copy all data in file. Then use (`db.teams.insertMany()`) command and insert all data to the data base. Data which you copied from file but between the brackets.

# Usage

In main menu you can choose option which you want

![main-page](/public/project_screens/main-page.png)

There you create new team(s) and see them in table. Also you can easily
edit and remove them.

![new-team](/public/project_screens/team-form.png)

In this page you add new player, edit them or delete. In the table you
can see all players. Of course you can also find them by using search
box.

Form for adding player:

![player-form](/public/project_screens/player-form-1.png)

Table which shows existing players:

![player-form](/public/project_screens/player-form-2.png)

Team cards shows all teams with logo and name. Button "More Info" redirect
you to new page, where you get a lot of information about selected
team.

![team-base](/public/project_screens/team-cards.png)

This is what the team information page looks like. There are two options: table view or map view. You can choose one of them or both.

Short info about team:

![team-info](/public/project_screens/team-info.png)

Team players represented in table form:

![team-info](/public/project_screens/team-info-table.png)

Team players represented in card form:

![team-info](/public/project_screens/team-info-cards.png)

In the last page you get the transfer option of players. Firstly you
should find player who you want to transfer. Then you choose team where
the player move.

![player-transfer](/public/project_screens/player-transfer.png)

### Rustam Asdanov - [LinkedIn](https://az.linkedin.com/in/rustamasdanov) - <asdanovrustam@gmail.com>

### Project Link: [Player Cards](https://github.com/Rustam-Asdanov/player_cards)

# Acknowledgments

- [Mongoose](https://mongoosejs.com/docs/)
- [Colorizer](https://coolors.co/)
- [Icons](https://www.flaticon.com/)
- [Axios vs
  Fetch](https://blog.logrocket.com/axios-vs-fetch-best-http-requests/)
- [Ejs](https://ejs.co/#docs)
