
function printAlert() {
    alert("script executed");
    return "Ben";
}

function printAlert(message) {
    alert("script executed: "+ message);
    return "Ben";
}

function drawD3() {

    d3.select("svg").append("circle")
        .attr("r", 5)
        .attr("cx", 50)
        .attr("cy", 50)
        .attr("fill", "red");
        
}

d3.select("app").append("span")
    .text("Hello, world!");

