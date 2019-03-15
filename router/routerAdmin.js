let ConnexionController = require('./../controllers/ConnexionController');

// Routes
module.exports = function(appAdmin){

  // Main Routes
  appAdmin.get('/', ConnexionController.Index);
  appAdmin.get('/accueil', ConnexionController.Index);

  // Tout le reste
  appAdmin.get('*', ConnexionController.NotFound);
  appAdmin.post('*', ConnexionController.NotFound);

};
