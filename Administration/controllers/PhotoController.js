// ////////////////////////////////////////////// P H O T O
module.exports.AjoutPhoto = function(request, response){
  if(request.body.deconnexion != null) {
    request.session.estConnecte = false;
  }
  if(request.session.estConnecte) {
    response.title = "Administration SIXVOIX - Ajout d'une photo";
    response.render('ajoutPhoto', response);
  }
  else {
    response.redirect("/connexion");
  }
};

module.exports.SupprimerPhoto = function(request, response){
  if(request.body.deconnexion != null) {
    request.session.estConnecte = false;
  }
  if(request.session.estConnecte) {
    response.title = "Administration SIXVOIX - Suppression d'une photo";
    response.render('supprimerPhoto', response);
  }
  else {
    response.redirect("/connexion");
  }
};
