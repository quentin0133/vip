let db = require('../configDb');

module.exports.getListeVip = function(callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM vip ORDER BY VIP_NOM ASC";
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};

module.exports.getVip = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM vip WHERE vip.VIP_NUMERO = " + data;
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};

module.exports.getArticleVip = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT ARTICLE_RESUME, ARTICLE_DATE_INSERT FROM"
      + " vip JOIN apoursujet ap ON vip.VIP_NUMERO = ap.VIP_NUMERO"
      + " JOIN article ar ON ap.ARTICLE_NUMERO = ar.ARTICLE_NUMERO"
      + " WHERE vip.VIP_NUMERO = " + data;
      console.log(sql);
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};
