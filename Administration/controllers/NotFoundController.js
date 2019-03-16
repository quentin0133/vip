// ////////////////////////////////////////////// N O T  F O U N D
module.exports.NotFound = function(request, response){
  if(request.session.estConnecte) {
    response.title = "Administration SIXVOIX";
    response.render('notFound', response);
  }
  else {
    response.redirect("/connexion");
  }
};
