// ////////////////////////////////////////////// C O N N E X I O N
module.exports.Index = function(request, response){
  response.title = "Administration SIXVOIX";
  response.render('home', response);
};

module.exports.NotFound = function(request, response){
  response.title = "Administration SIXVOIX";
  response.render('notFound', response);
};
