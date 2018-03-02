import Chart from 'chart.js';

export function PolarChart1js(ctx) {
  var data = {
    datasets: [{
        data: [10, 20, 30, 40, 50],
        backgroundColor: [
          'Red',
          'Blue',
          'Green',
          'Purple',
          'Yellow'
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'TypeScript',
        'ASP.Net',
        'Node.js',
        'React',
        'JavaScript'
    ]
  };


  return new Chart(ctx, {
    data: data,
    type: 'polarArea'
  });
}

export function PolarChart2js(ctx) {
  var data = {
    datasets: [{
        data: [50, 40, 30, 20, 10],
        backgroundColor: [
          '#1D809F',
          '#868e96',
          '#495057',
          '#343a40',
          '#212529'
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'TypeScript',
        'ASP.Net',
        'Node.js',
        'React',
        'JavaScript'
    ]
  };


  return new Chart(ctx, {
    data: data,
    type: 'polarArea'
  });
}
