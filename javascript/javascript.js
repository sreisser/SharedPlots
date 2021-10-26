
function myFunction() {

var table_file = "https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv"

d3.csv(table_file)
  .then(function(data){
    //  document.write(data[0].Xi)
      var mysvg = d3.select("svg")
      var circles = mysvg.selectAll("circle").data(data)
      circles.join("circle")
        .attr("cx", function(d) {return d.Xi})
        .attr("cy", function(d) {return d.Yi})
        .attr("r", 10)
        .attr("fill", function(d) {return d.color})
       
        mysvg.selectAll("circle")
            .transition().duration(3000)
            .attr("cx", function(d) {return d.Xf})
            .attr("cy", function(d) {return d.Yf})
           
        
   })

}
