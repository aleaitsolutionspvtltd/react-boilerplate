const optionsFour = {
  chart: {
    type: 'line'
  },
  title: {
    text: 'Line Chart Example'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  },
  yAxis: {
    title: {
      text: 'Value'
    }
  },
  series: [{
    name: 'Tokyo',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5]
  }, {
    name: 'New York',
    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0]
  }]
};

  export default optionsFour;