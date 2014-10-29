module.exports = function statusInit(server) {
  if (!process.env.LOOPBACK_AUTO) {
    var Status = server.models.Status;

    //insert row on model RoleMapping
    function addStatus(name) {
      Status.findOne({
        where: {
          'name': name
        }
      }, function(err, res) {
        if (res === null) {
          Status.create({
            name: name
          }, function(err, Status) {
            if (err) {
              console.log(err);
            }
            else {
              console.log('✓ Status ' + Status.name + ' created!');
            }
          });
        }
      });
    }

    addStatus('Publicado');
    addStatus('Futuro');
    addStatus('Borrador');
    addStatus('Pendiente');
    addStatus('Privado');
    addStatus('Basura');
  }
};
