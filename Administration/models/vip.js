let db = require('../configDb');

module.exports.getListeNationnalite = function(callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM nationalite";
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};

module.exports.getListeFilm = function(callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM film";
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};

module.exports.getListeAgence = function(callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM agence";
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};

module.exports.getListeDefile = function(callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM defile";
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};

module.exports.getListeMaisonDisque = function(callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM maisondisque";
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};

module.exports.getListeVip = function(callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM vip";
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};

module.exports.addVip = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "INSERT INTO vip(NATIONALITE_NUMERO, VIP_NOM, VIP_PRENOM, VIP_SEXE," +
      " VIP_NAISSANCE, VIP_TEXTE, VIP_DATE_INSERTION) VALUES ?";
      connexion.query(sql, [data], callback);
      connexion.release();
    }
  });
};

module.exports.addPhoto = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "INSERT INTO photo(PHOTO_NUMERO, VIP_NUMERO, PHOTO_SUJET, PHOTO_COMMENTAIRE," +
      " PHOTO_ADRESSE) VALUES ?"
      connexion.query(sql, [data], callback);
      connexion.release();
    }
  });
};

module.exports.addRealisateur = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "INSERT INTO realisateur(VIP_NUMERO)" +
      " VALUES ?";
      connexion.query(sql, [data], callback);
      connexion.release();
    }
  });
};

module.exports.addActeur = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "INSERT INTO acteur(VIP_NUMERO, ACTEUR_DATEDEBUT)" +
      " VALUES ?";
      connexion.query(sql, [data], callback);
      connexion.release();
    }
  });
};

module.exports.addMannequin = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "INSERT INTO mannequin(VIP_NUMERO, MANNEQUIN_TAILLE)" +
      " VALUES ?";
      connexion.query(sql, [data], callback);
      connexion.release();
    }
  });
};

module.exports.addChanteur = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "INSERT INTO chanteur(VIP_NUMERO, CHANTEUR_SPECIALITE)" +
      " VALUES ?";
      connexion.query(sql, [data], callback);
      connexion.release();
    }
  });
};

module.exports.addCouturier = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "INSERT INTO couturier(VIP_NUMERO)" +
      " VALUES ?";
      connexion.query(sql, [data], callback);
      connexion.release();
    }
  });
};

module.exports.addLiaison = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "INSERT INTO liaison(VIP_NUMERO, VIP_VIP_NUMERO," +
      " DATE_EVENEMENT, LIAISON_MOTIFFIN) VALUES ?";
      connexion.query(sql, [data], callback);
      connexion.release();
    }
  });
};

module.exports.addMariage = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "INSERT INTO mariage(VIP_NUMERO, VIP_VIP_NUMERO," +
      " DATE_EVENEMENT, MARIAGE_LIEU, MARIAGE_FIN, MARIAGE_MOTIFFIN) VALUES ?";
      connexion.query(sql, [data], callback);
      connexion.release();
    }
  });
};
