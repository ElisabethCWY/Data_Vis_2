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
var vg_bar = "inflation_linechart.json";
vegaEmbed("#inflationlinechart", vg_bar).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);

// Path to the bar chart JSON
var vg_bar = "arrivals_linechart.json";
vegaEmbed("#arrivalslinechart", vg_bar).then(function(result) {
    // Access the Vega view instance if needed
}).catch(console.error);



