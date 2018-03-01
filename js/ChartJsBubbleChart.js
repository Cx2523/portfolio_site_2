import Chart from 'chart.js';

function BubbleChartjs(ctx) {
  var data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
  };


  return new Chart(ctx, {
    data: data,
    type: 'polarArea'
  });
}

export default BubbleChartjs;
