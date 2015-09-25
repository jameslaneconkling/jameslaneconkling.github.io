var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var HeaderView = require('./headerView');

module.exports = Backbone.View.extend({
  template: require('../templates/app.hbs'),

  id: 'app',

  events: {},

  initialize: function (){
    // render child views
    this.headerView = new HeaderView({ model: this.model });
    $('body').append( this.headerView.render() );
    $('body').append( this.render() );
  },

  render: function () {
    this.$el.html( this.template(this.model.toJSON()) );
    return this.$el;
  }

});
