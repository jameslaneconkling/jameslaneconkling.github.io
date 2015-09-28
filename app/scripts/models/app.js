var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

  initialize: function() {
    this.set('twitter', 'jamesconkling');
    this.set('github', 'jameslaneconkling');
    this.set('email', 'james.lane.conkling@gmail.com');

    // set portfolio project data
    this.set('projects', [
      {
        title: 'Moabi RDC',
        url: 'rdc.moabi.org',
        github: 'https://github.com/crowdcover',
        description: 'An open-source geodata management platform based on OpenStreetMap for forest monitoring in the Congo Rainforest.'
      },
      {
        title: 'OSM Logging Roads',
        url: 'loggingroads.org',
        github: 'https://github.com/crowdcover/logging-roads',
        description: 'A crowdsourced forest monitoring platform.  Mapped over 3000 km of logging roads, identifying instances of illegal logging.  OSM Logging Roads is currently shortlisted as one of 3 finalists for the Eye on Earth Data Innovation Showcase.'
      },
      {
        title: 'CongoMines',
        url: 'http://congomines.org',
        github: 'https://github.com/crowdcover/congo-mines-app',
        description: "The Carter Center's CongoMines platform collects and analyzes data on mining activities in the Democratic Republic of the Congo.  For this project, we rebuilt their web site and database from the ground up using Ruby on Rails."
      },
      {
        title: 'Open Media Dashboard',
        url: null,
        github: 'https://github.com/media-dashboard',
        description: 'A set of visualization tools and server infrastructure to analyze media event datasets from the GDELT, Phoenix and ACLED projects.'
      },
      {
        title: 'Extractives and Fragile States',
        url: 'http://extractivesfragilestates.github.io/ExtractivesFragileStates/countries/drc/',
        github: 'https://github.com/ExtractivesFragileStates',
        description: "Multi-country map visualization project for the World Bank's Global Center on Conflict, Security and Development (GCCSD)."
      },
      {
        title: "Mapping China's Dam Rush",
        url: 'https://www.wilsoncenter.org/publication/interactive-mapping-chinas-dam-rush',
        github: 'https://github.com/jameslaneconkling/china_hydro',
        description: "Led web development, design, cartography, and data analysis on a microsite exploring the Chinese government's development plans for hydropower in the Himalayas."
      },
      {
        title: "China's West-East Energy Transfer",
        url: 'https://www.wilsoncenter.org/publication/map-chinas-west-east-electricity-transfer-project',
        github: null,
        description: "Led front end web development, web design, data analysis, cartography, and print layout design.  Versions of the project were published in two publications, 'New Security Beat' and 'China Environmental Series', and republished widely."
      }
    ]);

    this.set('code', [
      {
        title: 'Deck',
        url: 'http://jameslaneconkling.github.io/deck/',
        github: 'https://github.com/jameslaneconkling/deck',
        description: "A scroll-based, single-page app template. Deck's scroll navigation is heavily inspired by Mike Bostock's Stack.  Look mom, no scroll-jacking."
      },
      {
        title: 'ImFree | Social Vending Machine of the Future',
        url: null,
        github: 'github.com/ImFreeApp',
        description: 'A highly scalable, SOE platform to detect latent communities-of-interest based user’s social media footprints.'
      }
    ]);

    this.set('cartography', [
      {
        title: 'GDELT',
        url: 'www.com',
        github: null,
        description: null
      }
    ]);

  }

});
