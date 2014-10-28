module.exports = function roleInit(server) {
  var Level = server.models.Level;

  //insert row on model RoleMapping
  function addLevel(name) {
    Level.findOne({
      where: {
        'name': name
      }
    }, function(err, res) {
      if (res === null) {
        Level.create({
          name: name
        }, function(err, level) {
          if (err) {
            console.log(err);
          }
          else {
            console.log('✓ Level ' + level.name + ' created!');
          }
        });
      }
    });
  }

  addLevel('Principiante');
  addLevel('Intermedio');
  addLevel('avanzado');
};
