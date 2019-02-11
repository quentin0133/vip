let db = require('../configDb');

module.exports.getListeVip = function(callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM vip ORDER BY VIP_PRENOM ASC";
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};
