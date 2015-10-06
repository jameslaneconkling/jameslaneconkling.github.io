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
        description: "As a partnership between <a href='http://moabi.org'>Moabi</a> and the <a href='http://www.wri.org'>World Resource Institute</a>, <em>OpenStreetMap Logging Roads</em> is a crowdsourced forest monitoring platform to track the growth of logging roads in the Congo Basin.  Built on top of custom redeployments of the <a href=''>OSM iD Editor</a> and the <a href=''>HOT Tasking Manager</a> and uploading all analyzed geo data directly to OpenStreetMap, the platform compared known areas of logging activity with 14 years of LandSat imagery, allowing contributors to map the spread of logging roads by year.<br><br>To date, the project has mapped over 3000 km of logging roads, and in certain areas detected instances of illegal logging.  OSM Logging Roads is currently shortlisted as one of 3 finalists for the <a href='http://www.eoesummit.org/challenges/data-innovation/winners/'>Eye on Earth Data Innovation Showcase</a>.",
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
        description: "To meet the booming energy demands of coastal urban development, the Chinese government has announced ambitious plans to develop hydropower infrastructure in the Himalaya region.  As the source of many of Asia's most significant river networks, including the Yangtze, the Mekong, the Salween, and the Irrawaddy, the area's rivers represent a significant water resource for many countries, containing highly biodiverse ecosystems with deep cultural significance.  The microsite, built for the <em>Wilson Center's</em> <a href='https://www.wilsoncenter.org/program/china-environment-forum'>China Environment Forum</a>, visualized the Chinese government's development plans and their possible implications.",
        img: "himalaya_dams.png",
      },
      {
        title: "China's West-East Energy Transfer",
        url: "www.wilsoncenter.org/publication/map-chinas-west-east-electricity-transfer-project",
        github: null,
        description: "In 2000, as part of its 10th five-year plan, the Chinese government accounted the 'West-East Electricity Transfer Project' to channel energy to the country's rapidly urbanizing coast from its remote western hinterlands.  The project relies primarily on coal-fired plants to increase the country's overall electricity generation capacity, located primarily in its western provinces, and carried eastwards via three transmission corridors to its coastal industrial centers. Working with a small research team at the <em>Wilson Center's</em> <a href='https://www.wilsoncenter.org/program/china-environment-forum'>China Environment Forum</a>, we published a report, map, and microsite, which were republished extensively.",
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
        url: "https://api.mapbox.com/v4/james-lane-conkling.84217059/page.html?access_token=pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA#11/30.2448/81.2377",
        description: "A light-weight topography map inspired by <a href='https://en.wikipedia.org/wiki/Eduard_Imhof'>Eduard Imhof</a>.",
        img: "imhof.png",
        print: false
      },
      {
        title: "Hypsometric",
        url: "https://api.mapbox.com/v4/james-lane-conkling.e78b500f/page.html?access_token=pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA#10/27.6872/87.9648",
        description: "A study of color ramps for terrain-based <a href='https://en.wikipedia.org/wiki/Hypsometric_tints'>hypsometric</a> gradients.",
        img: "hypsometric.png",
        print: false
      },
      {
        title: "Base Map | Light",
        url: "https://api.mapbox.com/v4/james-lane-conkling.5630f970/page.html?access_token=pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA#8/35.568/38.035",
        description: "A minimal, mostly grayscale basemap useful as a background for data visualizations.",
        img: "base_light.png",
        print: false
      },
      {
        title: "Base Map | Dark",
        url: "https://api.mapbox.com/v4/james-lane-conkling.natural-earth/page.html?access_token=pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA#6/11.278/34.299",
        description: "A colored basemap using <em>Natural Earth's</em> hypsometric and shaded relief layers.  Originally designed for project for <em>Amnesty International</em> on conflict in the the Horn of Africa.",
        img: "base_dark.png",
        print: false
      },
      {
        title: "Evening",
        url: "https://api.mapbox.com/v4/james-lane-conkling.ed2b8c3b/page.html?access_token=pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA#11/36.4174/44.9506",
        description: "A terrain basemap using a orange-to-purple gradient.  Colors were inspired in part by the French artist and comic book illustrator <a href='https://en.wikipedia.org/wiki/Jean_Giraud'>Jean Giraud</a> (aka Moebius).",
        img: "evening.png",
        print: false
      },
      {
        title: "Night",
        url: "http://a.tiles.mapbox.com/v3/james-lane-conkling.trial42.html#4.00/35.39/-85.66",
        description: "A map using road and populated place data to simulate a satellite view of the dark side of the earth.",
        img: "night.png",
        print: false
      },
      {
        title: "Dymaxion",
        url: "https://dl.dropboxusercontent.com/u/49790262/jlc_dymaxion_submit.jpg",
        description: "A sharp reimagening of <em>Buckminster Fuller's</em> famous <a href='https://en.wikipedia.org/wiki/Dymaxion_map'>Dymaxion Map</a>.  Given the useful preservation of shape and area of the dymaxion map, the map's triangular graticules give approximate estimates of distance.",
        img: "dymaxion.png",
        print: true
      },
      {
        title: "Hydrography",
        url: "https://api.mapbox.com/v4/james-lane-conkling.NOLADim/page.html?access_token=pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA#12/29.8359/-89.9829",
        description: "An elevation map of <em>New Orleans</em> showing land above and below sea level.",
        img: "hydrography.png",
        print: false
      },
      {
        title: "Kibera",
        url: "https://dl.dropboxusercontent.com/u/49790262/kibera_schools_a1_v4.pdf",
        description: "A print map showing all schools, both public and informal, in Nairobi's Kibera slum and surrounding neighborhoods.  The map was produced with the <a href='http://groundtruth.in/'>GroundTruth Initiative</a> for the <a href='http://openschoolskenya.org/'>Open Schools Kenya</a> project.  A copy of this map was distributed to local schools and municipal and national officials.",
        img: "kibera.png",
        print: true
      },
      {
        title: "Rivers",
        url: "https://api.mapbox.com/v4/james-lane-conkling.fresh_water/page.html?access_token=pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA#5/27.176/103.535",
        description: "A cartographic visualization of the world's watersheds, with data from <a href='http://hydrosheds.cr.usgs.gov/index.php'>HydroSHEDS</a>, by the <em>USGS</em> and <em>World Wildlife Federation</em>.",
        img: "rivers.png",
        print: false
      },
      {
        title: "San Francisco",
        url: "https://api.mapbox.com/v4/james-lane-conkling.sf_slim/page.html?access_token=pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA#14/37.7680/-122.4266",
        description: "A desaturated cartographic view of <em>San Francisco's</em> road network and terrain.",
        img: "san_francisco.png",
        print: false
      },
      {
        title: "China's East-West Energy Transfer",
        url: "https://dl.dropboxusercontent.com/u/49790262/china_energy_static_iv.jpg",
        description: "Print map and infographic visualizing the spatial dimensions of China's energy policy.  Published in the <em>Woodrow Wilson Center's</em> <em>China Environmental Series, issue 12, August 2013</em>.",
        img: "china_energy_static_iv.jpg",
        print: true
      },
      {
        title: "Penobscot",
        url: "https://api.mapbox.com/v4/james-lane-conkling.penobscot/page.html?access_token=pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA#12/44.0374/-68.8583",
        description: "Bathymetric contour map of Penobscot Bay.",
        img: "penobscot.png",
        print: false
      },
      {
        title: "Population",
        url: "https://a.tiles.mapbox.com/v3/helsinki.h5550eo0/page.html?secure=1#7/25.528/475.851",
        description: "Map of global population disaggregated to a 1km square grid, using the <a href='http://web.ornl.gov/sci/landscan/'>LandScan</a> dataset from <em>Oak Ridge National Labs</em>.",
        img: "population.png",
        print: false
      },
      {
        title: "Madagascar",
        url: "https://api.mapbox.com/v4/james-lane-conkling.worldpop_zanzibar/page.html?access_token=pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA#11/-5.1518/39.6051",
        description: "3D population map of Madagascar and Zanzibar, using the <a href='http://www.worldpop.org.uk/'>World Pop</a> dataset.",
        img: "madagascar.png",
        print: false
      },
      {
        title: "Himalaya Terrain",
        url: "https://api.mapbox.com/v4/chinaenvforum.map-cvdwgvbn/page.html?access_token=pk.eyJ1IjoiY2hpbmFlbnZmb3J1bSIsImEiOiJfRWVWZ3ZrIn0.FOF0CoaD0HmJjmfORHPMqQ#8/29.238/103.200",
        description: "A hypsometric terrain map of the Himilayas, made for a project <em>Woodrow Wilson Center's</em> on <a href='https://dl.dropboxusercontent.com/u/49790262/wwc_site/index.html'>Himalayan hydropower</a>.",
        img: "himalaya_terrain_iii.png",
        print: false
      },
    ]);
  }

});
