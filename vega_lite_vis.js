// Path to the map JSON
var vg_map = "malaysian_immigration.json";
vegaEmbed("#map", vg_map).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

// Path to the bar chart JSON
var vg_bar = "total_arrivals_bar_chart.json";
vegaEmbed("#barchart", vg_bar).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

// Path to the bar chart JSON
var vg_bar = "testing.json";
vegaEmbed("#barchart2", vg_bar).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

