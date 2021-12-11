const withAuth = (req, res, next) => {
  console.log(req.session)
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;

  // will redirect user to login page if not already logged in