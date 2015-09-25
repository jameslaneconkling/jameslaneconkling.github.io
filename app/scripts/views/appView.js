var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var HeaderView = require('./headerView');
var SideView = require('./sideView');
var PlateView = require('./plateView');

module.exports = Backbone.View.extend({
  id: 'app',

  initialize: function (){
    $('body').append( this.render() );
  },

  render: function () {
    // render child templates
    this.$el.append( new HeaderView({ model: this.model }).render() );
    this.$el.append( new SideView({ model: this.model }).render() )
    this.$el.append( new PlateView({ model: this.model }).render() )
    return this.$el;
  }

});
