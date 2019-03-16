// ////////////////////////////////////////////// C O N N E X I O N
module.exports.Connexion = function(request, response){
  request.session.estConnecte = false;
  response.title = "Connexion à l'administration de SIXVOIX";
  response.render('connexion', {layout: 'connexion'});
};
