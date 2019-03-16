let db = require('../configDb');

module.exports.getListeLettreVip = function(callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT DISTINCT(LEFT(VIP_NOM, 1)) AS VIP_PREMIER_LETTRE FROM vip "
      + "ORDER BY VIP_PREMIER_LETTRE ASC";
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};

module.exports.getVipParLettreNom = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM vip WHERE VIP_NOM LIKE '"
      + data + "%' ORDER BY VIP_NUMERO ASC";
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.getPhotoParLettre = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT p.VIP_NUMERO, VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE FROM photo p JOIN vip ON p.VIP_NUMERO = vip.VIP_NUMERO"
      + " WHERE PHOTO_NUMERO = 1 AND VIP_NOM LIKE '" + data + "%'";
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.getPhotoParIdVip = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT p.VIP_NUMERO, VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE FROM photo p JOIN vip ON p.VIP_NUMERO = vip.VIP_NUMERO"
      + " WHERE p.VIP_NUMERO = " + data;
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.getVip = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM vip WHERE VIP_NUMERO = " + data;
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.getNationaliteVip = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT NATIONALITE_NOM FROM nationalite n JOIN vip ON"
      + " vip.NATIONALITE_NUMERO = n.NATIONALITE_NUMERO WHERE VIP_NUMERO = " + data;
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.estRealisateur = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM realisateur WHERE VIP_NUMERO = " + data;
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.realisateur = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT f.FILM_NUMERO, FILM_TITRE, FILM_DATEREALISATION FROM realisateur r JOIN film"
      + " f ON r.VIP_NUMERO = f.VIP_NUMERO WHERE r.VIP_NUMERO = " + data;
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.realisateurActeur = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT vip.VIP_NUMERO, f.FILM_NUMERO, VIP_PRENOM, VIP_NOM, PHOTO_ADRESSE, SUBSTRING(VIP_TEXTE, 1, 100) as VIP_RESUME"
      + "  FROM realisateur r JOIN film f ON r.VIP_NUMERO = f.VIP_NUMERO JOIN joue j ON f.FILM_NUMERO = j.FILM_NUMERO JOIN vip ON"
      + " vip.VIP_NUMERO = j.VIP_NUMERO JOIN photo ph ON vip.VIP_NUMERO = ph.VIP_NUMERO WHERE r.VIP_NUMERO = " + data
      + " AND ph.PHOTO_NUMERO = 1";
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.estActeur = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if(!err) {
      let sql = "SELECT * FROM acteur WHERE VIP_NUMERO = " + data;
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.acteur = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if(!err) {
      let sql = "SELECT vip.VIP_NUMERO, FILM_TITRE, FILM_DATEREALISATION,"
      + " VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE, SUBSTRING(VIP_TEXTE, 1, 100)"
      + " as VIP_RESUME FROM joue j JOIN film f ON j.FILM_NUMERO = f.FILM_NUMERO"
      + " JOIN realisateur r ON f.VIP_NUMERO = r.VIP_NUMERO JOIN vip ON"
      + " vip.VIP_NUMERO = r.VIP_NUMERO JOIN photo ph ON ph.VIP_NUMERO = vip.VIP_NUMERO WHERE j.VIP_NUMERO = " + data
      + " AND ph.PHOTO_NUMERO = 1";
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.estMannequin = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if(!err) {
      let sql = "SELECT * FROM mannequin WHERE VIP_NUMERO = " + data;
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.mannequin = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if(!err) {
      let sql = "SELECT vip.VIP_NUMERO, VIP_NOM, VIP_PRENOM, DEFILE_LIEU, DEFILE_DATE, PHOTO_ADRESSE, SUBSTRING(VIP_TEXTE, 1, 100) as VIP_RESUME FROM defiledans dd JOIN defile d ON"
      + " d.DEFILE_NUMERO = dd.DEFILE_NUMERO JOIN vip ON vip.VIP_NUMERO = d.VIP_NUMERO JOIN photo ph ON ph.VIP_NUMERO = vip.VIP_NUMERO WHERE dd.VIP_NUMERO = " + data
       + " AND PHOTO_NUMERO = 1";
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.estChanteur = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if(!err) {
      let sql = "SELECT * FROM chanteur WHERE VIP_NUMERO = " + data;
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.chanteur = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT CHANTEUR_SPECIALITE, ALBUM_TITRE, ALBUM_DATE, MAISONDISQUE_NOM FROM chanteur ch JOIN"
      + " composer co ON ch.VIP_NUMERO = co.VIP_NUMERO JOIN album a ON a.ALBUM_NUMERO = co.ALBUM_NUMERO JOIN"
      + " maisondisque m ON m.MAISONDISQUE_NUMERO = a.MAISONDISQUE_NUMERO WHERE ch.VIP_NUMERO = " + data;
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.estCouturier = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if(!err) {
      let sql = "SELECT * FROM couturier WHERE VIP_NUMERO = " + data;
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.couturier = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT d.DEFILE_NUMERO, DEFILE_LIEU, DEFILE_DATE FROM defiledans dd JOIN defile d ON d.DEFILE_NUMERO"
      + " = dd.DEFILE_NUMERO JOIN couturier c ON c.VIP_NUMERO = d.VIP_NUMERO JOIN vip ON vip.VIP_NUMERO = d.VIP_NUMERO"
      + " WHERE c.VIP_NUMERO = " + data + " AND PHOTO_NUMERO = 1 GROUP BY d.DEFILE_NUMERO";
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.couturierMannequin = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT d.DEFILE_NUMERO, VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE, SUBSTRING(VIP_TEXTE, 1, 100) as VIP_RESUME FROM couturier c JOIN defile d ON d.VIP_NUMERO = c.VIP_NUMERO"
      + " JOIN defiledans dd ON dd.DEFILE_NUMERO = d.DEFILE_NUMERO JOIN vip ON vip.VIP_NUMERO = dd.VIP_NUMERO JOIN photo ph ON ph.VIP_NUMERO = vip.VIP_NUMERO WHERE d.VIP_NUMERO = " + data
       + " AND PHOTO_NUMERO = 1";
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.mariage = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if(!err) {
      let sql = "SELECT VIP_VIP_NUMERO, VIP_NOM, VIP_PRENOM, DATE_EVENEMENT, MARIAGE_FIN,"
      + " MARIAGE_LIEU, PHOTO_ADRESSE, SUBSTRING(VIP_TEXTE, 1, 100) as VIP_RESUME"
      + " FROM mariage m JOIN vip ON vip.VIP_NUMERO = m.VIP_VIP_NUMERO JOIN"
      + " photo ph ON ph.VIP_NUMERO = vip.VIP_NUMERO WHERE m.VIP_NUMERO = "
      + data + " AND PHOTO_NUMERO = 1"
       + " AND PHOTO_NUMERO = 1";
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};

module.exports.liaison = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if(!err) {
      let sql = "SELECT VIP_VIP_NUMERO, VIP_NOM, VIP_PRENOM, DATE_EVENEMENT, LIAISON_MOTIFFIN,"
      + " PHOTO_ADRESSE, SUBSTRING(VIP_TEXTE, 1, 100) as VIP_RESUME FROM liaison l JOIN"
      + " vip ON vip.VIP_NUMERO = l.VIP_VIP_NUMERO JOIN photo ph ON ph.VIP_NUMERO ="
      + " vip.VIP_NUMERO WHERE l.VIP_NUMERO = " + data + " AND PHOTO_NUMERO = 1";
      connexion.query(sql, data, callback);
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

module.exports.getPhotoLien = function(data, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM photo WHERE PHOTO_NUMERO NOT IN(SELECT PHOTO_NUMERO FROM photo WHERE PHOTO_NUMERO = 1)"
      + " AND VIP_NUMERO = " + data;
      connexion.query(sql, data, callback);
      connexion.release();
    }
  });
};
