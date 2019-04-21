let db = require('../configDb');

module.exports.getListeVip = function(callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM vip";
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};

module.exports.getListePhotoVip = function(idVip, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM photo WHERE VIP_NUMERO = " + idVip;
      connexion.query(sql, callback);
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

module.exports.getPhotoSecondaire = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM photo WHERE PHOTO_NUMERO NOT IN(SELECT PHOTO_NUMERO FROM photo WHERE PHOTO_NUMERO = 1)"
      + " AND VIP_NUMERO = " + data;
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.supprimerPhoto = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "DELETE FROM photo WHERE VIP_NUMERO = " + data[0] + " AND PHOTO_NUMERO = " + data[1];
      console.log(sql);
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};
