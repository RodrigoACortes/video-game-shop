const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const router = express.Router();


module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  var Game = require("../models/Games");

  app.post('/api/add_game_db', (req, res) => {
    console.log(req)
    var game = new Game({
      title: req.body.title,
      price: req.body.price,
      cover: req.body.coverLink,
      proxy: true
    });
    game.save(function(err) {
      if (err) 
      res.send(err);
      res.json({ message: "Game successfully added!" });
    });    
  })
};
