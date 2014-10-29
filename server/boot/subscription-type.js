module.exports = function subscriptionTypeInit(server) {
  if (!process.env.LOOPBACK_AUTO) {
    var SubscriptionType = server.models.SubscriptionType;

    //insert row on model RoleMapping
    function addSubscriptionType(name, price) {
      SubscriptionType.findOne({
        where: {
          'name': name
        }
      }, function(err, res) {
        if (res === null) {
          SubscriptionType.create({
            name: name,
            price: price
          }, function(err, subscriptionType) {
            if (err) {
              console.log(err);
            }
            else {
              console.log('✓ Subscription Type ' + subscriptionType.name + ' created!');
            }
          });
        }
      });
    }

    addSubscriptionType('Basic', '0');
    addSubscriptionType('Plus/month', '15');
    addSubscriptionType('Plus/year', '160');
  }
};
