let model = require("../models/vip.js");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.Repertoire = 	function(request, response){
  response.title = 'Répertoire des stars';
  model.getListeLettreVip(function(err, result){  // appel le module test qui exécute la requete SQL
    if (err) {
      console.log(err);
      return;
    }
    response.listeLettreVip = result;
    response.render('repertoireVips', response);
  });
} ;
