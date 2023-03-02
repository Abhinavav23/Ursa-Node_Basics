const checkLogInStatus = (req, res, next) => {
  // check the username
  // match password
  console.log("running checkLogInStatus in middleware");
  if(req.path === '/product'){
    // 1000 lines of code
    next();
  } else{
    res.send('you are not logged in user');
  }
};

const checkUser = (req, res, next) => {
    console.log('running middleware 2');
    next();
}

module.exports = { checkLogInStatus, checkUser };
