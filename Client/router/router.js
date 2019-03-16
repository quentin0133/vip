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
  app.get('/repertoire/vip/:idVip', VipController.DetailVip);

  // Albums
  app.get('/album', AlbumController.ListerAlbum);
  app.post('/album', AlbumController.ListerAlbum);
  app.get('/album/:idVip', AlbumController.AlbumVip);
  app.post('/album/:idVip', AlbumController.AlbumVip);

  // Article
  app.get('/articles', ArticleController.Article);
  app.get('/articles/:idVip', ArticleController.ArticleVip);

  // Tout le reste
  app.get('*', HomeController.NotFound);
  app.post('*', HomeController.NotFound);

};
