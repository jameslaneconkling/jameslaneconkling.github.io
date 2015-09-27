var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  id: 'plates',

  className: 'columns small-12 medium-8 push-4',

  initialize: function (){},

  template: require('../templates/plate.hbs'),

  render: function () {
    this.$el.append( this.template({
      name: 'projects',
      items: this.model.get('projects')
    }) );

    this.$el.append( this.template({
      name: 'code',
      items: this.model.get('code')
    }) );

    this.$el.append( this.template({
      name: 'cartography',
      items: this.model.get('cartography')
    }) );

    return this.$el;
  }

});
