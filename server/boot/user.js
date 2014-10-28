module.exports = function userInit(server) {
  if (process.env.NODE_ENV !== 'production') {
    if (!process.env.LOOPBACK_AUTO) {
      var User = server.models.User;

      //insert row on model RoleMapping
      function addUser(username, email, password) {
        User.findOne({
          where: {
            'username': username,
            'email': email
          }
        }, function(err, res) {
          if (res === null) {
            User.create({
              username: username,
              email: email,
              password: password
            }, function(err, user) {
              if (err) {
                console.log(err);
              }
              else {
                console.log('✓ User ' + user.username + ' created!');
              }
            });
          }
        });
      }

      addUser('paulomcnally', 'paulomcnally@gmail.com', '123456');
    }
  }
};
