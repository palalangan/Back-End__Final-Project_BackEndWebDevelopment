const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true,
    // },
    // email : {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // gender: String,
    // status: String,
    name: { type: String, require: [true, "Nama harus diisi"] },
  password: { type: String, require: [true, "Password harus diisi"] },
  age: { type: Number, require: [true, "Age harus diisi"] },
  team: { type: String, require: [true, "Team harus diisi"] },
  game: {
    type: String,
    //enum: ["Dota2", "VALORANT", "Apex Legends", "PUBG", "CSGO"],
    //default: "Dota2",
  },
  status: {
    type: String,
    //enum: ["Captain", "Member", "Coach"],
    //default: "Captain",
  },
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;