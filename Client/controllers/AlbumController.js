let model = require("../models/album.js");
var async = require("async");

// ////////////////////// L I S T E R     A L B U M S

module.exports.ListeAlbum = 	function(request, response){
  response.title = 'Album des stars';
  model.getListeVip(function(err1, result1){  // appel le module test qui exécute la requete SQL
    if (err1) {
      console.log(err1);
      return;
    }
    response.longueurListeVip = result1.length  - result1.length % 12;
    if(request.session.indiceListe == null) {
        request.session.indiceListe = 0;
    }
    switch (request.body.boutonMenu) {
      case "Début":
        request.session.indiceListe = 0;
        break;
      case "Précédent":
        request.session.indiceListe -= 12;
        break;
      case "Suivant":
        request.session.indiceListe += 12;
        break;
      case "Fin":
        request.session.indiceListe = response.longueurListeVip;
        break;
      default:
    }
    model.getListeVipReduit(request.session.indiceListe, function(err2, result2){  // appel le module test qui exécute la requete SQL
      if (err1) {
        console.log(err2);
        return;
      }
      response.listeVip = result2;
      response.render('listerAlbum', response);
    });
  });
};

module.exports.AlbumVip = function(request, response){
  let idVip = request.params.idVip;
  model.getListeVip(function(err1, result1){  // appel le module test qui exécute la requete SQL
    if (err1) {
      console.log(err1);
      return;
    }
    response.longueurListeVip = result1.length - result1.length % 12;
    switch (request.body.boutonMenu) {
      case "Début":
        request.session.indiceListe = 0;
        break;
      case "Précédent":
        request.session.indiceListe -= 12;
        break;
      case "Suivant":
        request.session.indiceListe += 12;
        break;
      case "Fin":
        request.session.indiceListe = response.longueurListeVip;
        break;
      default:
    }
    console.log(request.body.vipPhoto);
    if(request.session.indicePhoto == null || request.body.vipPhoto != null) {
      request.session.indicePhoto = 0;
    }
    switch (request.body.flechePhoto) {
      case "Précédent":
        request.session.indicePhoto -= 1;
        break;
      case "Suivant":
        request.session.indicePhoto += 1;
        break;
      default:
    }
  async.parallel([
      function (callback) {
        model.getListeVipReduit(request.session.indiceListe, function(err, result){  // appel le module test qui exécute la requete SQL
          callback(null, result)
        });
      },
      function (callback) {
        model.getVip(idVip, function(err, result){  // appel le module test qui exécute la requete SQL
          callback(null, result)
        });
      },
    ], function(err, result) {
      if (err) {
        console.log(err);
        return;
      }
      response.listeVip = result[0];
      response.vip = result[1][request.session.indicePhoto];
      response.longueurListePhoto = result[1].length - 1;
      response.title = 'Album de ' + result[1][0].VIP_PRENOM + ' ' + result[1][0].VIP_NOM;
      response.render('albumVip', response);
    });
  });
};
