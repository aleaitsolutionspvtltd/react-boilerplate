const options = {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Pie Chart Example'
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }]
  }]
};


export default options;