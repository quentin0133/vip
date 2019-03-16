// ////////////////////////////////////////////// A J O U T  V I P
module.exports.AjoutVip = function(request, response){
  if(request.session.estConnecte) {
    response.title = "Administration SIXVOIX - Ajout d'un vip";
    response.render('ajoutVip', response);
  }
  else {
    response.redirect("/connexion");
  }
};
