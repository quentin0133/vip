let model      = require("../models/photo.js"),
    formidable = require("formidable"),
    async      = require("async");

// ////////////////////////////////////////////// P H O T O
module.exports.AjoutPhoto = function(request, response){
  if(request.body.deconnexion != null) {
    request.session.estConnecte = false;
  }
  if(request.session.estConnecte) {
    if(request.method == "POST") {
      let form = new formidable.IncomingForm();

      form.on("fileBegin", function(err, file) {
        file.path = __dirname + '\\..\\..\\Client\\public\\images\\vip\\' + file.name;
      });

      form.parse(request, function(err, fields, file) {
        if(err) {
          console.log(err);
          return;
        }
        if(fields.sujetPhoto == "")
          fields.sujetPhoto = null;
        if(fields.commentairePhoto == "")
          fields.commentairePhoto = null;

        model.getListePhotoVip(fields.vip, function(err, result){
          if (err) {
            console.log(err);
            return;
          }
          let idPhoto = result.length + 1;
          // On ajoute la photo au serveur
          let photo = [[
            idPhoto,
            fields.vip,
            fields.sujetPhoto,
            fields.commentairePhoto,
            file.photo.name
          ]];

          model.addPhoto(photo, function(err2, result2){
            if (err2) {
              console.log(err2);
              return;
            }
          });
        });
      });
    }
    model.getListeVip(function(err, result){
      if (err) {
        console.log(err);
        return;
      }
      response.listeVip = result;
      response.title = "Administration SIXVOIX - Ajout d'une photo";
      response.render('ajoutPhoto', response);
    });
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
