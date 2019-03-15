// ////////////////////////////////////////////// C O N N E X I O N
module.exports.Index = function(request, response){
  response.title = "Administration SIXVOIX";
  response.render('connexion', response);
};

module.exports.NotFound = function(request, response){
  response.title = "Administration SIXVOIX";
  response.render('notFoundAdmin', response);
};
