// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
// import bcrypt module
const bcrypt = require("bcrypt");
// import multer module
const multer = require("multer");
// import axios module
const axios = require("axios");
// import path module
const path = require("path");
// Connect App with DataBase (sportMafiaDB: Database name)
mongoose.connect("mongodb://localhost:27017/sportMafiaDB");
// creates express application: app
const app = express();

app.use("/images", express.static(path.join("backend/images")));
// import Player Model
const Player = require("./models/player");
// import Match Model
const Match = require("./models/match");
// import Stadium Model
const Stadium = require("./models/stadium");
// import User Model
const User = require("./models/user");

// BodyParser Configuration
//1. Send response with JSON Format
app.use(bodyParser.json());
//2. Parse Request object
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// Multer configuration
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});
// All Business Logics
// app.ACTION-HTTP("PATH", (req,res)=> {
// Here business logic
// })
// Our DataBase
let players = [
  { id: 1, name: "Messi", nbr: 10, age: 36, position: "ATK" },
  { id: 2, name: "Salah", nbr: 8, age: 28, position: "MID" },
  { id: 3, name: "ALi", nbr: 11, age: 21, position: "GK" },
  { id: 4, name: "Mohsen", nbr: 3, age: 30, position: "DEF" },
];
let teams = [
  { id: 1, name: "CA", owner: "Ali", stadium: "Manzah", foundation: 1900 },
  { id: 2, name: "EST", owner: "Salah", stadium: "Rades", foundation: 1904 },
  { id: 3, name: "JUV", owner: "Karim", stadium: "Camp new", foundation: 1910 },
  { id: 4, name: "INT", owner: "Med", stadium: "Manzah", foundation: 1899 },
];
let matches = [
  {
    id: 1,
    scoreOne: 1,
    scoreTwo: 1,
    teamOne: "FCB",
    teamTwo: "RMD",
    stadium: "Rades",
  },
  {
    id: 2,
    scoreOne: 2,
    scoreTwo: 3,
    teamOne: "CA",
    teamTwo: "EST",
    stadium: "Manzeh",
  },
  {
    id: 3,
    scoreOne: 0,
    scoreTwo: 1,
    teamOne: "JUV",
    teamTwo: "INT",
    stadium: "Camp New",
  },
  {
    id: 4,
    scoreOne: 2,
    scoreTwo: 1,
    teamOne: "LIV",
    teamTwo: "MUN",
    stadium: "Berna",
  },
];

function generateId(T) {
  var max;
  if (T.length == 0) {
    max = 0;
  } else {
    max = T[0].id;
    for (let i = 1; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;
      }
    }
  }
  return max;
}

// Business Logic: Request Get All Players
app.get("/players", (req, res) => {
  console.log("Here into get all players");
  Player.find().then((docs) => {
    console.log("Here data", docs);
    if (docs) {
      res.json({ playersTable: docs, message: "Here all players" });
    }
  });
});
// Business Logic: Request Delete Player By ID
app.delete("/players/:id", (req, res) => {
  // activatedRoute.snapshot.paramMap.get("id") == req.params.id
  console.log("Here into delete Player", req.params.id);
  Player.deleteOne({ _id: req.params.id }).then((data) => {
    console.log("Here data after delete", data);
    if (data.deletedCount == 1) {
      res.json({ message: `Player N° ${req.params.id} is deleted` });
    }
  });
});
// Business Logic: Request Post Player (adding player)
app.post(
  "/players",
  multer({ storage: storageConfig }).single("img"),
  (req, res) => {
    let player = req.body;
    console.log("Here into adding player", player);
    const url = req.protocol + "://" + req.get("host");
    console.log("Here url", url);
    // insert player (req.body) into DataBase (players)
    let playerObj = new Player({
      age: player.age,
      nbr: player.nbr,
      name: player.name,
      position: player.position,
      img: url + "/images/" + req.file.filename,
    });
    playerObj.save((err, doc) => {
      // doc: inserted object (name,nbr,.., _id)
      if (err) {
        console.log("Here err with DB", err);
        res.json({ message: "Error with adding Player" });
      } else {
        res.json({ message: "Player added with success" });
      }
    });
  }
);

// Business Logic: request to display Player By ID
app.get("/players/:id", (req, res) => {
  console.log("Here to configure", req.params.id);
  Player.findOne({ _id: req.params.id }).then((doc) => {
    console.log("Here data after find one by id", doc);
    if (doc) {
      res.json({ player: doc });
    }
  });
});

// Business Logic: Request Edit Player
app.put("/players/:id", (req, res) => {
  console.log("Here into edit Player", req.body);
  console.log("Here ID", req.params.id);
  Player.updateOne({ _id: req.params.id }, req.body).then((data) => {
    if (data.nModified == 1) {
      res.json({ message: "Player edited with success" });
    }
  });
});

// Business Logic: Request search Match
app.post("/search", (req, res) => {
  console.log("Here match", req.body);
  let findedMatches = [];
  for (let i = 0; i < matches.length; i++) {
    if (
      matches[i].teamOne == req.body.teamOne &&
      matches[i].teamTwo == req.body.teamTwo
    ) {
      findedMatches.push(matches[i]);
    }
  }
  res.json({ allMatches: findedMatches });
});

// Business Logic: Request to Add Match Object
app.post("/matches", (req, res) => {
  console.log("Here match body", req.body);
  let match = new Match({
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
  });
  match.save((err, doc) => {
    if (err) {
      console.log("Here err", err);
    } else {
      res.json({
        message: "Match is added with Success",
      });
    }
  });
});

// Business Logic : request Get All Matches
app.get("/matches", (req, res) => {
  console.log("Here into get all matches");
  Match.find().then((docs) => {
    console.log("Here all matches", docs);
    res.json({ matchesTable: docs });
  });
});

// Business Logic: Request Delete Match By ID
app.delete("/matches/:id", (req, res) => {
  console.log("Here into delete match", req.params.id);
  Match.deleteOne({ _id: req.params.id }).then((response) => {
    console.log("here response after delete", response);
    res.json({ message: "Match deleted with success" });
  });
});

// Business Logic: Request Get Match By Id
app.get("/matches/:id", (req, res) => {
  console.log("Here into get match by id", req.params.id);
  Match.findOne({ _id: req.params.id }).then((doc) => {
    if (doc) {
      res.json({ match: doc });
    }
  });
});

// Business Logic: Request Update Match By Id
app.put("/matches/:id", (req, res) => {
  console.log("Body", req.body);
  console.log("Params", req.params.id);
  Match.updateOne({ _id: req.params.id }, req.body).then((data) => {
    res.json({ message: "Updated with success" });
  });
});

// Business Logic: Request Add stadium
app.post("/stadiums", (req, res) => {
  console.log("Here object", req.body);
  let stadium = new Stadium(req.body);
  stadium.save((err, doc) => {
    if (err) {
      console.log("Here error with DB", err);
    } else {
      res.json({ message: "Stadium Added with success" });
    }
  });
});

// Business Logic: Request get all stadiums
app.get("/stadiums", (req, res) => {
  Stadium.find().then((docs) => {
    res.json({ stadiumsTable: docs });
  });
});

// Business Logic: Request get  stadium by id
app.get("/stadiums/:id", (req, res) => {
  Stadium.findOne({ _id: req.params.id }).then((doc) => {
    res.json({ stadium: doc });
  });
});

// Business Logic: Request Edit stadium by id
app.put("/stadiums/:id", (req, res) => {
  Stadium.updateOne({ _id: req.params.id }, req.body).then((response) => {
    console.log("response from DB", response);
    res.json({ message: "Stadium updated with success" });
  });
});

// Business Logic: Request Signup user
app.post("/users/signup", (req, res) => {
  bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
    console.log("Here user", req.body);
    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      pwd: cryptedPwd,
    });
    user.save((err, doc) => {
      if (err) {
        console.log("Here err with DB", err);
      } else {
        let userToSend = {
          firstName: doc.firstName,
          lastName: doc.lastName,
          email: doc.email,
        };
        res.json({ message: "Welcome", user: userToSend });
      }
    });
  });
});

// Business Logic: Request Login user
app.post("/users/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((responseEmail) => {
      console.log("responseEmail", responseEmail);
      if (!responseEmail) {
        res.json({ message: "0" });
      }
      return bcrypt.compare(req.body.pwd, responseEmail.pwd);
    })
    .then((responsePwd) => {
      console.log("responsePwd", responsePwd);
      if (!responsePwd) {
        res.json({ message: "1" });
      }

      User.findOne({ email: req.body.email }).then((finalResult) => {
        let user = {
          firstName: finalResult.firstName,
          lastName: finalResult.lastName,
          email: finalResult.email,
          role: "admin",
        };
        res.json({ message: "2", user: user });
      });
    });
});

// Business Logic: Search country weather
app.post("/weather", (req, res) => {
  const apiKey = "62ee756a34835483299877a61961cafb";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    req.body.country +
    "&appid=" +
    apiKey +
    "&units=metric";
  axios.get(apiUrl).then((response) => {
    let weather = response.data;
    let result = {
      temp: weather.main.temp,
      humidity: weather.main.humidity,
      wind: weather.wind.speed,
    };
    res.json({ result: result });
    console.log("Here axios response", response.data);
  });
});
// app is importable from another files
module.exports = app;
