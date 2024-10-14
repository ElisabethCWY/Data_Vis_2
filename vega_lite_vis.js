// Path to the map JSON
var vg_map = "malaysian_immigration_map.json";
vegaEmbed("#map", vg_map).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

// Path to the bar chart JSON
var vg_bar = "total_arrivals_bar_chart.json";
vegaEmbed("#barchart", vg_bar).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

// Path to the bar chart JSON
var vg_bar = "brush_inflation_linechart.json";
vegaEmbed("#brushinflate", vg_bar).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

// Path to the bar chart JSON
var vg_bar = "brush_arrivals_linechart.json";
vegaEmbed("#brusharrive", vg_bar).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

// Path to the bar chart JSON
var vg_bar = "connected_dp_total_arrivals.json";
vegaEmbed("#connecteddp", vg_bar).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

// Path to the  JSON
var vg_bar = "prop_map_sym_countries.json";
vegaEmbed("#propsym", vg_bar).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);




