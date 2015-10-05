var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

  initialize: function() {
    this.set('twitter', 'jamesconkling');
    this.set('github', 'jameslaneconkling');
    this.set('email', 'james.lane.conkling@gmail.com');
    this.set('collection', null);

    // set portfolio project data
    this.set('projects', [
      {
        title: "Moabi DRC",
        url: "rdc.moabi.org",
        github: "github.com/crowdcover",
        description: "<em>Moabi DRC</em> is a collaborative mapping initiative by the <a href='http://moabi.org'>Moabi project</a> that uses OpenStreetMap infrastructure to increase transparency and accountability on resource issues in Democratic Republic of Congo.  The project's current focus is on developing an independent monitoring system for the <a href='http://www.un-redd.org/aboutredd'>UN-REDD+</a> deforestation reduction initiative.<br><br>In building the platform on a custom redeployment of OSM's core infrastructure, the team joins a growing crowd of developers and cartographers who are seeking to apply OSM's incredibly powerful collaborative spatial tools to new problem sets.",
        img: "moabi.png",
      },
      {
        title: "OSM Logging Roads",
        url: "loggingroads.org",
        github: "github.com/crowdcover/logging-roads",
        description: "As a partnership between <a href='http://moabi.org'>Moabi</a> and the <a href='http://www.wri.org'>World Resource Institute</a>, <em>OpenStreetMap Logging Roads</em> is a crowdsourced forest monitoring platform to track the growth of logging roads in the Congo Basin.  Built on top of custom redeployments of the <a href=''>OSM iD Editor</a> and the <a href=''>HOT Tasking Manager</a> and uploading all analyzed geodata directly to OpenStreetMap, the platform compared known areas of logging activity with 14 years of LandSat imagery, allowing contributors to map the spread of logging roads by year.<br><br>To date, the project has mapped over 3000 km of logging roads, and in certain areas detected instances of illegal logging.  OSM Logging Roads is currently shortlisted as one of 3 finalists for the <a href='http://www.eoesummit.org/challenges/data-innovation/winners/'>Eye on Earth Data Innovation Showcase</a>.",
        img: "loggingroads.png",
      },
      {
        title: "CongoMines",
        url: "congomines.org",
        github: "github.com/crowdcover/congo-mines-app",
        description: "The <a href='http://www.cartercenter.org/'>Carter Center's</a> <em>CongoMines</em> platform collects and analyzes data on mining companies active in the Democratic Republic of the Congo.  As a team, we rebuilt the platform on Ruby on Rails to associate and visualize the complex relationships between local mining companies, large multinationals, and contracts, tax payments, social projects, mining operations, and other data points.  The platform is currently maintained by the Katanga-based CongoMines team.",
        img: "congomines_vi.png",
      },
      {
        title: "Open Media Dashboard",
        url: null,
        github: "github.com/media-dashboard",
        description: "<em>The Open Media Dashboard</em> is an early-staged project to efficiently store, analyze, and visualize structured event datasets from the GDELT, Phoenix, ACLED and other projects.  Machine-coded and human-coded event datasets are powerful tools to understand aggregate trends in global affairs; to date, though, tools to explore these datasets are limited in scope, and do not allow users to compare statistics across datasets.  Using cutting edge database and web visualization code bases, <em>The Open Media Dashboard</em> is building powerful research toolkits.",
        img: "gdelt_dashboard.png",
      },
      {
        title: "Deck",
        url: "jameslaneconkling.github.io/deck/",
        github: "github.com/jameslaneconkling/deck",
        description: "<em>Deck</em> is a scroll-based, single-page app template, built in <a href='http://backbonejs.org'>Backbone</a>, with a simple, powerful templating scheme and asset pipeline. Navigation is heavily inspired by Mike Bostock's <a href='https://github.com/mbostock/stack'>Stack presentation library</a>.  For a great overview of how to think about scroll navigation, read <a href='http://bost.ocks.org/mike/scroll/'>How to Scroll</a>.<br><br>Look mom, no scroll-jacking!",
        img: "deck.png",
      },
      {
        title: "ImFree | Social Vending Machine of the Future",
        url: null,
        github: "github.com/ImFreeApp",
        description: "<em>ImFree | Social Vending Machine of the Future</em> is mobile and web-based app with a highly scalable back end to detect latent communities-of-interest based on a user’s social media footprints.  The web client is built in Backbone, with Express and Flask-based back end services.",
        img: "code_ii.png",
      },
      {
        title: "Extractives and Fragile States",
        url: "extractivesfragilestates.github.io/ExtractivesFragileStates/countries/drc/",
        github: "github.com/ExtractivesFragileStates",
        description: "Built for the World Bank's <em>Global Center on Conflict, Security and Development (GCCSD)</em>, the <em>Extractives and Fragile States</em> platform stored and visualized data on natural resource extraction in post-conflict or unstable countries.",
        img: "extractives_fragile_states.png",
      },
      {
        title: "Mapping China's Dam Rush",
        url: "www.wilsoncenter.org/publication/interactive-mapping-chinas-dam-rush",
        github: "github.com/jameslaneconkling/china_hydro",
        description: "To meet the booming energy demands of coastal urban development, the Chinese government has announced ambitious plans to develope hydropower infrastructure in the Himalaya region.  As the source of many of Asia's most significant river networks, including the Yangtze, the Mekong, the Salween, and the Irrawaddy, the area's rivers represent a significant water resource for many countries, containing highly biodiverse ecosystems with deep cultural significance to across the region.  The microsite, built for the <em>Wilson Center's</em> <a href='https://www.wilsoncenter.org/program/china-environment-forum'>China Environment Forum</a>, visualized the Chinese government's development plans and their possible implications.",
        img: "himalaya_dams.png",
      },
      {
        title: "China's West-East Energy Transfer",
        url: "www.wilsoncenter.org/publication/map-chinas-west-east-electricity-transfer-project",
        github: null,
        description: "",
        img: "china_energy_ii.png",
      }
    ]);

    // this.set('code', [
    //   {
    //     title: "Deck",
    //   " url: 'jameslaneconkling.github.io/deck/",
    //     github: "github.com/jameslaneconkling/deck",
    //     description: "A scroll-based, single-page app template. Deck's scroll navigation is heavily inspired by Mike Bostock's Stack.  Look mom, no scroll-jacking."",
    //     img: "code_ii.png",
    //   },
    //   {
    //     title: "ImFree | Social Vending Machine of the Future",
    //   " url: nul",
    //     github: "github.com/ImFreeApp",
    //     description: "A highly scalable, SOE platform to detect latent communities-of-interest based user’s social media footprints.'",
    //     img: "code_ii.png",
    //   }
    // ]);

    this.set('cartography', [
      {
        title: "Imhof",
        url: null,
        description: null,
        img: "imhof.png",
        print: false
      },
      {
        title: "Hypsometric",
        url: null,
        description: null,
        img: "hypsometric.png",
        print: false
      },
      {
        title: "Base Map | Bright",
        url: null,
        description: null,
        img: "base_bright.png",
        print: false
      },
      {
        title: "Base Map | Dark",
        url: null,
        description: null,
        img: "base_dark.png",
        print: false
      },
      {
        title: "Evening",
        url: null,
        description: null,
        img: "evening.png",
        print: false
      },
      {
        title: "Night",
        url: null,
        description: null,
        img: "night.png",
        print: false
      },
      {
        title: "Dymaxion",
        url: null,
        description: null,
        img: "dymaxion.png",
        print: true
      },
      {
        title: "Hydrography",
        url: null,
        description: null,
        img: "hydrography.png",
        print: false
      },
      {
        title: "Kibera",
        url: null,
        description: null,
        img: "kibera.png",
        print: true
      },
      {
        title: "Rivers",
        url: null,
        description: null,
        img: "rivers.png",
        print: false
      },
      {
        title: "San Francisco",
        url: null,
        description: null,
        img: "san_francisco.png",
        print: false
      },
      {
        title: "China's East-West Energy Transfer",
        url: null,
        description: null,
        img: "china_energy_static_iv.jpg",
        print: true
      },
      {
        title: "Penobscot",
        url: null,
        description: null,
        img: "penobscot.png",
        print: false
      },
      {
        title: "Population",
        url: null,
        description: null,
        img: "population.png",
        print: false
      },
      {
        title: "Madagascar",
        url: null,
        description: null,
        img: "madagascar.png",
        print: false
      },
      {
        title: "Himalaya Terrain",
        url: null,
        description: null,
        img: "himalaya_terrain_iii.png",
        print: false
      },
    ]);
  }

});
