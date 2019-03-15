let db = require('../configDb');

module.exports.getListeVip = function(callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM vip JOIN photo p ON p.VIP_NUMERO = vip.VIP_NUMERO"
      + " WHERE PHOTO_NUMERO = 1 ORDER BY VIP_NOM ASC"
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};

module.exports.getListeVipReduit = function(indiceListe, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT p.VIP_NUMERO, PHOTO_ADRESSE FROM vip JOIN photo p ON"
      + " p.VIP_NUMERO = vip.VIP_NUMERO WHERE PHOTO_NUMERO = 1 ORDER BY VIP_NOM"
      + " ASC LIMIT 12 OFFSET " + indiceListe;
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};

module.exports.getVip = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM vip JOIN photo p ON p.VIP_NUMERO = vip.VIP_NUMERO WHERE vip.VIP_NUMERO = " + data;
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};
