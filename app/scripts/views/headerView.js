var Backbone = require('backbone');

module.exports = Backbone.View.extend({

  template: require('../templates/header.hbs'),

  tagName: 'header',

  className: '',

  initialize: function () {
  },

  show: function(){
    this.$el.addClass('active');
  },

  hide: function(){
    this.$el.removeClass('active');
  },

  render: function () {
    this.$el.html( this.template(this.model.toJSON()) );
    return this.$el;
  }

});
