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
var vg_lineinflate = "brush_inflation_linechart.json";
vegaEmbed("#brushinflate", vg_lineinflate).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

// Path to the bar chart JSON
var vg_linearrive = "brush_arrivals_linechart.json";
vegaEmbed("#brusharrive", vg_linearrive).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

// Path to the bar chart JSON
var vg_connect = "connected_dp_total_arrivals.json";
vegaEmbed("#connecteddp", vg_connect).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

// Path to the  JSON
var vg_propsym = "prop_sym_map_countries.json";
vegaEmbed("#propsym", vg_propsym).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);




