var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  id: 'side',

  template: require('../templates/side.hbs'),

  initialize: function (){},

  render: function () {
    this.$el.append( this.template(this.model.toJSON()) );
    return this.$el;
  }

});
