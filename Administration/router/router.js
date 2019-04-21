let ConnexionController = require('./../controllers/ConnexionController');
let VipController = require('./../controllers/VipController');
let PhotoController = require('./../controllers/PhotoController');
let NotFoundController = require('./../controllers/NotFoundController');

// Routes
module.exports = function(appAdmin) {

  // Page d'ajout d'un vip
  appAdmin.get('/ajoutVip', VipController.AjoutVip);
  appAdmin.post('/ajoutVip', VipController.AjoutVip);

  // Page de suppression d'un vip
  appAdmin.get('/suppressionVip', VipController.SupprimerVip);
  appAdmin.post('/suppressionVip', VipController.SupprimerVip);

  // Page de modification d'un vip
  appAdmin.get('/modificationVip', VipController.ModifierVip);
  appAdmin.post('/modificationVip', VipController.ModifierVip);

  // Page d'ajout d'une photo d'un vip
  appAdmin.get('/ajoutPhoto', PhotoController.AjoutPhoto);
  appAdmin.post('/ajoutPhoto', PhotoController.AjoutPhoto);

  // Page de suppression d'une photo d'un vip
  appAdmin.get('/suppressionPhoto', PhotoController.SupprimerPhoto);
  appAdmin.get('/suppressionPhoto/:vip', PhotoController.SupprimerPhoto);
  appAdmin.post('/suppressionPhoto/:vip', PhotoController.SupprimerPhoto);

  // Connexion en mode Administration
  appAdmin.get('/connexion', ConnexionController.Connexion);
  appAdmin.post('/connexion', ConnexionController.Connexion);

  // Tout le reste
  appAdmin.get('*', NotFoundController.NotFound);
  appAdmin.post('*', NotFoundController.NotFound);
};
