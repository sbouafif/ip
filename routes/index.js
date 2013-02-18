var ip = 0;

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {title: ip});
};
