let model = require("../models/vip.js");
var async = require("async");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.Repertoire = function(request, response){
  response.title = 'Répertoire des stars';
  model.getListeLettreVip(function(err, result){  // appel le module test qui exécute la requete SQL
    if (err) {
      console.log(err);
      return;
    }
    response.listeLettreVip = result;
    response.render('repertoireVips', response);
  });
};

module.exports.RepertoireTrie = 	function(request, response){
  response.title = 'Répertoire des stars';
  let lettreVip = request.params.lettreVip;
  async.parallel([
    function (callback) {
      model.getListeLettreVip(function(err, result){  // appel le module test qui exécute la requete SQL
        callback(null, result)
      });
    },
    function (callback) {
      model.getPhotoParLettre(lettreVip, function(err, result){  // appel le module test qui exécute la requete SQL
        callback(null, result)
      });
    },
  ], function(err, result) {
    if (err) {
      console.log(err);
      return;
    }
    response.listeLettreVip = result[0];
    response.listeVip = result[1];
    response.render('repertoireVips', response);
  });
};

module.exports.DetailVip = 	function(request, response){
  let idVip = request.params.idVip;
  async.parallel([
    function (callback) {
      model.getListeLettreVip(function(err, result){  // appel le module test qui exécute la requete SQL
        callback(null, result)
      });
    },
    function (callback) {
      model.getPhotoParIdVip(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.getVip(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.getNationaliteVip(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.estRealisateur(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.realisateur(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.realisateurActeur(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.estActeur(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.acteur(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.estMannequin(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.mannequin(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.estChanteur(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.chanteur(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.estCouturier(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.couturier(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.couturierMannequin(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.mariage(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.liaison(idVip, function(err, result){
        callback(null, result)
      })
    },
    function (callback) {
      model.getPhotoSecondaire(idVip, function(err, result){
        callback(null, result)
      })
    },
  ], function(err, result) {
    if (err) {
      console.log(err);
      return;
    }
    response.listeLettreVip = result[0];
    response.photoPrincipal = result[1][0];
    response.vip = result[2][0];
    response.nation = result[3][0];
    if(result[4].length > 0) {
      response.estRealisateur = true;
      response.realisateur = result[5];
      response.realisateurActeur = result[6];
      response.realisateurActeurTaille = result[6].length - 1;
    }
    if(result[7].length > 0) {
      response.estActeur = true;
      response.acteur = result[8];
    }
    if(result[9].length > 0) {
      response.estMannequin = true;
      response.mannequin = result[10];
    }
    if(result[11].length > 0) {
      response.estChanteur = true;
      response.chanteur = result[12];
      response.specialite = result[12][0];
    }
    if(result[13].length > 0) {
      response.estCouturier = true;
      response.couturier = result[14];
      response.couturierMannequin = result[15];
      response.couturierMannequinTaille = result[15].length - 1;
    }
    if(result[16].length > 0) {
      response.mariage = result[16];
    }
    if(result[17].length > 0) {
      response.liaison = result[17];
    }
    response.photoSecondaire = result[18];
    response.title = 'Détail de ' + result[2][0].VIP_PRENOM + ' ' + result[2][0].VIP_NOM;
    response.render('detailVip', response);
  });
};
