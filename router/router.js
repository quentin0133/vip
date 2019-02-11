let HomeController = require('./../controllers/HomeController');
let VipController = require('./../controllers/VipController');
let AlbumController = require('./../controllers/AlbumController');
let ArticleController = require('./../controllers/ArticleController');



// Routes
module.exports = function(app){

  // Main Routes
  app.get('/', HomeController.Index);
  app.get('/accueil', HomeController.Index);

  // VIP
  app.get('/repertoire', VipController.Repertoire);
  app.get('/repertoire/:lettreVip', VipController.RepertoireTrie);
  app.get('/repertoire/vip/:vip', VipController.DetailVip);

  // Albums
  app.get('/album', AlbumController.ListerAlbum);

  // Article
  app.get('/articles', ArticleController.Article);

  // Tout le reste
  app.get('*', HomeController.NotFound);
  app.post('*', HomeController.NotFound);

};
