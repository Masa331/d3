// console.log('ahoj');
// console.log(d3);
// data = [4, 8, 15, 16, 23, 42]


window.onload = function () {
  const main = d3.selectAll('main');

  const span = main.append("span");
  span.style("color", "white");
  span.style("background-color", "black");
  span.html("Hello, world!");
  // const node = span.node();

  // main.append(node);
}
