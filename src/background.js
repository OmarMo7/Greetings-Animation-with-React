var i = 1;
var j = 1;
var colors = ['rgb(51, 102, 153)', 'rgb(0, 153, 204)', 'rgb(0, 204, 255)', 'rgb(51, 204, 255)', 'rgb(204, 204, 255)', 'rgb(255, 204, 255)', 'rgb(255, 153, 204)', 'rgb(255, 102, 153)', 'rgb(255, 0, 102)', 'rgb(204, 0, 102)', 'rgb(153, 0, 51)']

var colors2 = ['rgb(51, 80, 153)', 'rgb(0, 80, 204)', 'rgb(0, 80, 255)', 'rgb(51, 80, 255)', 'rgb(204, 80, 255)', 'rgb(255, 80, 255)', 'rgb(255, 80, 204)', 'rgb(255, 80, 153)', 'rgb(255, 80, 102)', 'rgb(204, 80, 102)', 'rgb(153, 80, 51)']

var width = ['22', '26', '30', '35']
var backIntervalID = setInterval(() => {
  var styles = {
    "transition": "all 1s ease-out",
    "background": `${colors[i++]}`,
    "background-image": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width[j++]}' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='${colors2[i]}' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  };
  console.log("done")


  Object.assign(document.body.style, styles)
  if (i === colors.length) i = 0
  if (j === width.length) j = 0
}, 4000)

export default backIntervalID