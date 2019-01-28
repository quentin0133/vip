let db = require('../configDb');

module.exports.getListeLettreVip = function(callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT DISTINCT(LEFT(VIP_NOM, 1)) AS VIP_PREMIER_LETTRE FROM vip ORDER BY VIP_PREMIER_LETTRE ASC";
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};
