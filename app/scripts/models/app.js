var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

  initialize: function() {
    this.set('twitter', 'jamesconkling');
    this.set('github', 'jameslaneconkling');
    this.set('email', 'james.lane.conkling@gmail.com');

    // set portfolio project data
    this.set('projects', [
      {
        title: 'GDELT',
        url: 'www.com'
      }
    ]);

    this.set('code', [
      {
        title: 'GDELT',
        url: 'www.com'
      },
      {
        title: 'GDELT',
        url: 'www.com'
      }
    ]);

    this.set('cartography', [
      {
        title: 'GDELT',
        url: 'www.com'
      }
    ]);

  }

});
