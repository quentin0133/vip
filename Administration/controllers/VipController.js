// ////////////////////////////////////////////// V I P
module.exports.AjoutVip = function(request, response){
  if(request.body.deconnexion != null) {
    request.session.estConnecte = false;
  }
  if(request.session.estConnecte) {
    response.title = "Administration SIXVOIX - Ajout d'un vip";
    response.render('ajoutVip', response);
  }
  else {
    response.redirect("/connexion");
  }
};

module.exports.SupprimerVip = function(request, response){
  if(request.body.deconnexion != null) {
    request.session.estConnecte = false;
  }
  if(request.session.estConnecte) {
    response.title = "Administration SIXVOIX - Suppression d'un vip";
    response.render('supprimerVip', response);
  }
  else {
    response.redirect("/connexion");
  }
};

module.exports.ModifierVip = function(request, response){
  if(request.body.deconnexion != null) {
    request.session.estConnecte = false;
  }
  if(request.session.estConnecte) {
    response.title = "Administration SIXVOIX - Modifier d'un vip";
    response.render('modifierVip', response);
  }
  else {
    response.redirect("/connexion");
  }
};
