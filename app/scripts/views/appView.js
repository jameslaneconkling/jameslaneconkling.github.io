var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var HeaderView = require('./headerView');
var FooterView = require('./footerView');

module.exports = Backbone.View.extend({
  template: require('../../templates/app.hbs'),

  id: 'app',

  events: {},

  initialize: function (){
    // console.log('asdfasdf')
    // render headerView, footerView, and bodyView
    this.headerView = new HeaderView({ model: this.model });
    this.footerView = new FooterView({ model: this.model });
    $('body').append( this.headerView.render() );
    $('body').append( this.render() );
    $('body').append( this.footerView.render() );
  },

  render: function () {
    this.$el.html( this.template(this.model.toJSON()) );
    return this.$el;
  }

});
