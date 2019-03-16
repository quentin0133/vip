let ConnexionController = require('./../controllers/ConnexionController');
let AjoutVipController = require('./../controllers/AjoutVipController');
let NotFoundController = require('./../controllers/NotFoundController');

// Routes
module.exports = function(appAdmin) {

  // Page d'ajout d'un vip
  appAdmin.get('/', AjoutVipController.AjoutVip);
  appAdmin.get('/ajoutVip', AjoutVipController.AjoutVip);

  // Connexion en mode Administration
  appAdmin.get('/connexion', ConnexionController.Connexion);

  // Tout le reste
  appAdmin.get('*', NotFoundController.NotFound);
  appAdmin.post('*', NotFoundController.NotFound);
};
