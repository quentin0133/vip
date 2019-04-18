let model      = require("../models/vip.js"),
    formidable = require("formidable"),
    async      = require("async");

// ////////////////////////////////////////////// V I P
module.exports.AjoutVip = function(request, response){
  if(request.body.deconnexion != null) {
    request.session.estConnecte = false;
  }
  if(request.session.estConnecte) {
    // On vérifie qu'on a bien rempli les formulaire et valider pour ajouter le vip

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

        if(fields.sexe == "null")
          fields.sexe = null;
        if(fields.dateNaissance == "")
          fields.dateNaissance = null;
        if(fields.biographie == "")
          fields.biographie = null;

        // On récupère les éléments des formulaires pour ajouter le vip
        let vip = [[
          fields.nationalite,
          fields.nom,
          fields.prenom,
          fields.sexe,
          fields.dateNaissance,
          fields.biographie,
          formatDate(new Date())
        ]];
        // On ajoute le vip séparément des autre requêtes pour récupérer l'id attribuer et pouvoir le réutiliser
        model.addVip(vip, function(err2, result2){
          if (err2) {
            console.log(err2);
            return;
          }

          // On récupère le dernier id ajouté (ici c'est le vip)
          let idVip = result2.insertId;

          if(fields.sujetPhoto == "")
            fields.sujetPhoto = null;
          if(fields.commentairePhoto == "")
            fields.commentairePhoto = null;

          // On ajoute la photo au serveur
          let photo = [[
            1,
            idVip,
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

          // Si on coche que c'est réalisateur, on l'ajoute dans réalisateur
          if(fields.estRealisateur) {
            model.addRealisateur([[idVip]], function(err2, result2){
              if (err2) {
                console.log(err2);
                return;
              }
            });
          }

          if(fields.estActeur) {
            if(fields.dateActeur == "")
              fields.dateActeur = null;
            model.addActeur([[idVip, fields.dateActeur]], function(err2, result2){
              if (err2) {
                console.log(err2);
                return;
              }
            });
          }

          if(fields.estMannequin) {
            if(fields.tailleMannequin == "")
              fields.tailleMannequin = null;
            model.addMannequin([[idVip, fields.tailleMannequin]], function(err2, result2){
              if (err2) {
                console.log(err2);
                return;
              }
            });
          }

          if(fields.estChanteur) {
            if(fields.specialiteChanteur == "")
              fields.specialiteChanteur = null;
            model.addChanteur([[idVip, fields.specialiteChanteur]], function(err2, result2){
              if (err2) {
                console.log(err2);
                return;
              }
            });
          }

          if(fields.estCouturier) {
            model.addCouturier([[idVip]], function(err2, result2){
              if (err2) {
                console.log(err2);
                return;
              }
            });
          }

          if(fields.estLie) {
            if(!fields.estSepare)
              fields.causeSeparation  = null;
            model.addLiaison([[idVip, fields.vipLiaison, fields.dateLie, fields.causeSeparation]], function(err2, result2){
              if (err2) {
                console.log(err2);
                return;
              }
            });
          }

          if(fields.estMarie) {
            if(!fields.estDivorce) {
              fields.dateDivorce = null;
              fields.causeDivorce = null;
            }
            model.addMariage([[idVip, fields.vipMarie, fields.dateMariage, fields.lieuMariage, fields.dateDivorce, fields.causeDivorce]],
              function(err2, result2){
              if (err2) {
                console.log(err2);
                return;
              }
            });
          }
        });
      });

    }
    async.parallel([
      function (callback) {
        model.getListeNationnalite(function(err, result){
          callback(null, result)
        });
      },
      function (callback) {
        model.getListeMaisonDisque(function(err, result){
          callback(null, result)
        });
      },
      function (callback) {
        model.getListeVip(function(err, result){
          callback(null, result)
        });
      },
    ], function(err, result) {
      if (err) {
        console.log(err);
        return;
      }
      response.listeNationalite = result[0];
      response.listeMaisonDisque = result[1];
      response.listeVip = result[2];
      response.title = "Administration SIXVOIX - Ajout d'un vip";
      response.render('ajoutVip', response);
    });
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

function formatDate(date) {
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if(seconds < 10)
    seconds = "0" + seconds;
  if(minutes < 10)
    minutes = "0" + minutes;
  if(hours < 10)
    hours = "0" + hours;
  if(day < 10)
    day = "0" + day;
  if(month < 10)
    month = "0" + month;

  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}
