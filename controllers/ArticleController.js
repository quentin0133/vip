let model = require("../models/article.js");
var async = require("async");

// ////////////////////////////////////////////// A R T I C L E
module.exports.Article = function(request, response){
  response.title = "Bienvenue sur le site de SIXVOIX (IUT du Limousin).";
  model.getListeVip(function(err, result){  // appel le module test qui exécute la requete SQL
    if (err) {
      console.log(err);
      return;
    }
    response.vip = result;
    response.render('repertoireArticle', response);
  });
};
