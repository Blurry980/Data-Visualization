function showMap(year) {
    // The svg
    var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    // Map and projection
    // Changed size and scale of map from the example I found
    var path = d3.geoPath();
    var projection = d3.geoMercator()
        .scale(125)
        .center([0, 20])
        .translate([width / 2, height / 2]);

    // Data and color scale
    // ColorScale functions change color based on the population data
    var data = d3.map();
    var colorScale = d3.scaleThreshold()
        // Changed the values to match population density based on the data
        // Used the minimum and maximum and put values in between
        .domain([1, 20, 40, 80, 200, 1000, 5000])
        // changed from blue to green
        .range(d3.schemeGreens[7]);

    // Load external data
    // Changed URL and column names to use my population density data
    // We're using the year that was passed in as a column name.
    d3.queue()
        .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
        // Serving from my domain to avoid cross-origin errors
        .defer(d3.csv, "http://MalachiCoan.com/WPP2019_POP_F06_POPULATION_DENSITY.csv", function (d) {
            data.set(d.country, +d[year]);
        })
        .await(ready);

    function ready(error, topo) {
        // I put in the mouseOver function to make it more interactive
        let mouseOver = function(d) {
            d3.selectAll(".Country")
                .transition()
                .duration(200)
                .style("opacity", .5)
                .style("stroke", "transparent");

            d3.select(this)
                .transition()
                .duration(200)
                .style("opacity", 1)
                .style("stroke", "red");
        // I printed the data to console.log to get the property names
            document.getElementById("countryInfo").innerHTML = this.__data__.properties.name + ": " + this.__data__.density + " persons/km<sup>2</sup>";
        }

        let mouseLeave = function(d) {
            d3.selectAll(".Country")
                .transition()
                .duration(200)
                .style("opacity", 1)
                .style("stroke", "transparent");

            d3.select(this)
                .transition()
                .duration(200)
                .style("stroke", "transparent");
        }
        // Draw the map
        svg.append("g")
            .selectAll("path")
            .data(topo.features)
            .enter()
            .append("path")
            // draw each country
            .attr("d", d3.geoPath()
                .projection(projection)
            )
            // set the color of each country
            .attr("fill", function (d) {
                d.density = data.get(d.properties.name) || 0;
                return colorScale(d.density);
            })
            // I'm adding a Country class to each country so the mouseOver fades out the countries
            // And attaching functions to the mouseOver and mouseOut events
            .attr("class", "Country")
            .on("mouseover", mouseOver)
            .on("mouseout", mouseLeave);
    }
}

