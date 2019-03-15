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
    response.listeVip = result;
    response.render('repertoireArticle', response);
  });
};

module.exports.ArticleVip = function(request, response){
  let idVip = request.params.idVip;
  async.parallel([
    function (callback) {
      model.getListeVip(function(err, result){  // appel le module test qui exécute la requete SQL
        callback(null, result)
      });
    },
    function (callback) {
      model.getVip(idVip, function(err, result){  // appel le module test qui exécute la requete SQL
        callback(null, result)
      });
    },
    function (callback) {
      model.getArticleVip(idVip, function(err, result){  // appel le module test qui exécute la requete SQL
        callback(null, result)
      });
    },
  ], function(err, result) {
    if (err) {
      console.log(err);
      return;
    }
    response.listeVip = result[0];
    response.vip = result[1][0];
    response.article = result[2];
    if(result[2].length > 0)
      response.estArticle = true
    response.title = 'Article de ' + result[1][0].VIP_PRENOM + ' ' + result[1][0].VIP_NOM;
    response.render('articleVip', response);
  });
};
