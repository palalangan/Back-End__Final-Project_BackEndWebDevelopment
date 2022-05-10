const Userdb = require("../model/model");

// create and save new user
exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Data harus diisi" });
    return;
  }

  //new user
  const user = new Userdb({
    name: req.body.name,
    password: req.body.password,
    age: req.body.age,
    team: req.body.team,
    game: req.body.game,
    status: req.body.status,
  });

  //save data in database
  user
    .save(user)
    .then((data) => {
      //res.send(data);
      res.redirect("/add-user");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Terjadi kesalahan dalam menyimpan data user",
      });
    });
};

// return all users or a single user
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({ message: "Data dengan id " + id + "tidak ditemukan" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            "Terjadi kesalahan dalam mengambil data user dengan id = " + id,
        });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Terjadi kesalahan dalam mengambil data user",
        });
      });
  }
};

//update a user by id
exports.update = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ messaeg: "Data yang diisi tidak boleh kosong" });
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Update data dari user dengan id ${id} gagal` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Terjadi kesalahan dalam mengubah data user" });
    });
};