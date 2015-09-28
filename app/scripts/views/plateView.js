var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  id: 'plates',

  className: 'columns small-12 medium-8 push-4',

  initialize: function (){
    this.listenTo(this.model, 'change:collection', this.makePlateActive)
  },

  template: require('../templates/plate.hbs'),

  makePlateActive: function(model){
    var id = '#' + model.get('collection') + '-plate';
    this.$el.find(id).addClass('active').siblings().removeClass('active');
  },

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
