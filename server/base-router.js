
module.exports = function(app){

  app.get("/lambdas/:lambda", function(req, res){
    var lambda = req.params.lambda;
    res.redirect("/lambdas/" + lambda + "/latest");
  });
  app.get("/lambdas/:lambda/:version");
  app.put("/lambdas/:lambda")
  app.post("/lambdas/:lambda", function(req, res){
    var lambda = req.params.lambda;
    res.redirect("/lambdas/" + lambda + "/latest");
  })
}
