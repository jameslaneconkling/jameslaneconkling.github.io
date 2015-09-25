var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  id: 'plates',

  plateTemplates: [
    require('../templates/plates/code.hbs'),
    require('../templates/plates/cartography.hbs'),
  ],

  initialize: function (){},

  render: function () {
    this.plateTemplates.forEach(function(template){
      this.$el.append( template(this.model.toJSON()) );
    }, this);
    return this.$el;
  }

});
