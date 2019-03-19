let model = require("../models/connexion.js");
let Cryptr = require('cryptr');
let cryptr = new Cryptr('MaSuperCléDeChiffrementDeouF');
// ////////////////////////////////////////////// C O N N E X I O N
module.exports.Connexion = function(request, response){
  if(request.session.estConnecte) {
    response.title = "Administration SIXVOIX";
    response.render('notFound', response);
  }
  else {
    model.users(function(err, result){
      request.session.estConnecte = false;
      if(request.body.user != null && request.body.password != null) {
        if(request.body.user == result[0].LOGIN
        && request.body.password == cryptr.decrypt(result[0].PASSWD)) {
          request.session.estConnecte = true;
          request.session.pseudo = result[0].LOGIN;
          response.redirect("/ajoutVip");
          response.end();
        }
        else {
          response.title = "Connexion à l'administration de SIXVOIX";
          response.render('connexion', {layout: 'connexion'});
        }
      }
      else {
        response.title = "Connexion à l'administration de SIXVOIX";
        response.render('connexion', {layout: 'connexion'});
      }
    });
  }
};
