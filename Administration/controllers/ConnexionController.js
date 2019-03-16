// ////////////////////////////////////////////// C O N N E X I O N
module.exports.Connexion = function(request, response){
  if(request.session.estConnecte) {
    response.redirect("/notFound");
  }
  else {
    request.session.estConnecte = false;
    if(request.body.user == "a" && request.body.password == "b") {
      request.session.estConnecte = true;
      response.redirect("/ajoutVip");
    }
    else {
      response.title = "Connexion à l'administration de SIXVOIX";
      response.render('connexion', {layout: 'connexion'});
    }
  }
};
