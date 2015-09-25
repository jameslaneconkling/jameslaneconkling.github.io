var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var HeaderView = require('./headerView');
var SideView = require('./sideView');

module.exports = Backbone.View.extend({
  id: 'app',

  plateTemplates: [
    require('../templates/plates/code.hbs'),
    require('../templates/plates/cartography.hbs'),
  ],

  initialize: function (){
    $('body').append( this.render() );
  },

  render: function () {
    // render child templates
    this.$el.append( new HeaderView({ model: this.model }).render() );
    this.$el.append( new SideView({ model: this.model }).render() )
    this.plateTemplates.forEach(function(template){
      this.$el.append( template(this.model.toJSON()) );
    }, this);
    return this.$el;
  }

});
