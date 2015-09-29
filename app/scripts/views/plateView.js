var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({
  id: 'plates',

  className: 'columns small-12 medium-8 push-4',

  // events: {
    // 'click li.item': 'toggleCollectionItemActive'
  // },

  initialize: function (){
    this.listenTo(this.model, 'change:collection', this.makePlateActive);

    // bind events via jquery [useful if the callback's context should be set to the element, rather than the view]
    this.$el.on('click', 'li.item .header', this.toggleCollectionItemActive);
  },

  template: require('../templates/plate.hbs'),

  makePlateActive: function(model){
    var id = '#' + model.get('collection') + '-plate';
    this.$el.find(id).addClass('active').siblings('.active').removeClass('active');
  },

  toggleCollectionItemActive: function(e){
    e.preventDefault();
    e.stopPropagation();
    var $collectionItem = $(this).parent('.item');

    if( $collectionItem.hasClass('active') ){
      $collectionItem.removeClass('active');
    }else{
      $collectionItem.addClass('active').siblings('.active').removeClass('active');
    }
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
