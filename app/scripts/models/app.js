var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

  initialize: function() {
    this.set('twitter', 'jamesconkling');
    this.set('github', 'jameslaneconkling');
    this.set('email', 'james.lane.conkling@gmail.com');

    //
    this.set('plates', {
      projects: [
        {
          title: 'GDELT',
          url: 'www.com'
        }
      ],
      code: [
        {
          title: 'GDELT',
          url: 'www.com'
        },
        {
          title: 'GDELT',
          url: 'www.com'
        }
      ],
      cartography: [
        {
          title: 'GDELT',
          url: 'www.com'
        }
      ]

    });
  }

});
