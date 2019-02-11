// ////////////////////////////////////////////// A R T I C L E
module.exports.Article = function(request, response){
  response.title = "Bienvenue sur le site de SIXVOIX (IUT du Limousin).";
  response.render('repertoireArticle', response);
};
