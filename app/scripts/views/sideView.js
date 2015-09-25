var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var HeaderView = require('./headerView');

module.exports = Backbone.View.extend({
  id: 'sidebar',

  template: require('../templates/side.hbs'),

  initialize: function (){},

  render: function () {
    this.$el.append( this.template(this.model.toJSON()) );
    return this.$el;
  }

});
