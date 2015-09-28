var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  id: 'side',

  className: 'columns medium-4 hide-for-small-only',

  events: {
    'click a': 'showPlate'
  },

  template: require('../templates/side.hbs'),

  initialize: function (){
    this.listenTo(this.model, 'change:active', this.makeActive);
  },

  showPlate: function(e){
    e.preventDefault();

    this.model.set('active', e.target.text);
  },

  makeActive: function(model){
    var className = '.' + model.get('active');
    this.$el.find(className).addClass('active').siblings().removeClass('active');
  },

  render: function () {
    this.$el.append( this.template() );
    return this.$el;
  }

});
