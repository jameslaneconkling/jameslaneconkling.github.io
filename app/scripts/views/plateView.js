var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  id: 'plates',

  initialize: function (){},

  template: require('../templates/plate.hbs'),

  render: function () {
    _.each(this.model.get('plates'), function(name, items){
      this.$el.append( this.template({ items: items }) );
    }, this);
    return this.$el;
  }

});
