var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  id: 'side',

  className: 'columns medium-4 hide-for-small-only',

  template: require('../templates/side.hbs'),

  initialize: function (){},

  render: function () {
    this.$el.append( this.template() );
    return this.$el;
  }

});
