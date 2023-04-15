document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('myChart').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      datasets: [{
        label: "(in trillion yuan)",
        data: [6.09, 8.11, 10.4, 16.39, 21.79, 26.1, 29.16, 31.63, 34.81, 37.21],
        backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 99, 255, 0.8)',
            'rgba(255, 255, 64, 0.8)',
            'rgba(0, 128, 128, 0.8)',
            'rgba(255, 99, 132, 0.8)',

        ],
        borderColor: [
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
            
        xAxes: [{
          ticks: {
            fontColor: "white", 
            fontFamily: "TrebuchetMS",
            
          },
          gridLines: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
        }],
        yAxes: [{
          ticks: {
            fontColor: "white", 
            fontFamily: "TrebuchetMS",
          },
          gridLines: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
        }],
      },

      title: {
        display: true,
        text: ['Gross e-commerce sales in China from 2011 to 2020 (in trillion yuan)'],
        fontColor: 'white',
        fontSize: 24,
      }
    }
    
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const pieCtx = document.getElementById('myPieChart').getContext('2d');

  const myPieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: ['Vietnam','Thailand','Philippines','Malaysia','Indonesia','Singapore'],
      datasets: [{
        data: [70,	61,	40,	35,	30,	21],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          text: ['Top 6 countries with the highest e-commerce sales in 2020 (in %)'],
          fontColor: 'white',
          fontSize: 24,
        }
      }
});
});


document.addEventListener('DOMContentLoaded', function() {
  const polarCtx = document.getElementById('myPolarChart').getContext('2d');
  const myPolarChart = new Chart(polarCtx, {
    type: 'polarArea',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      title: {
        display: true,
        text: ['Top 6 countries with the highest e-commerce sales in 2020'],
        fontColor: 'white',
        fontSize: 24
      },
      scale: {
        angleLines: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)',
          lineWidth: 1
        },
        gridLines: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)',
          lineWidth: 1
        }
      }
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const horizontalBarCtx = document.getElementById('myHorizontalBarChart').getContext('2d');

  const horizontalBarChart = new Chart(horizontalBarCtx, {
    type: 'horizontalBar',
    data: {
      labels: [
        'Improved shopping experience',
        'Customer engagement/feedback',
        'Generating revenue',
        'Follow the latest digital trends',
        'Customer acquisition',
        'Collaboration/partnership with influencers',
        'Cobranding with key suppliers/brands',
      ],
      datasets: [
        {
          label: 'Percentage',
          data: [52, 52, 48, 47, 41, 41, 36],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 99, 255, 0.8)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        datalabels: {
          color: '#fff',
          anchor: 'end',
          align: 'start',
          offset: 8,
          font: {
            size: 14,
          },
          formatter: function (value) {
            return value + '%';
          },
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: 'white',
            },
            gridLines: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
          },
        ],
        yAxes: [
          {
            position: 'left',
            type: 'category',
            ticks: {
              fontColor: 'white',
            },
            gridLines: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
          },
        ],
      },
      title: {
        display: true,
        text: ['Main goals for livestreaming strategies among retailers worldwide 2022'],
        fontColor: 'white',
        fontSize: 24,
      }
    },
  });
});

