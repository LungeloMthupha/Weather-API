
//const line_g = document.getElementById('line_graph').getContext('2d');
var ctx = document.getElementById('line_graph');
//line chart data
var data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4"],
    datasets: [
      {
        label: "Home Team",
        data: [10,20,25,5],
        backgroundColor: "#ec6e4c",
        borderColor: "#ebecf0",
        fill: false,
        lineTension: 0.3,
        radius: 5
      }/* ,
      {
        label: "Away Team",
        data: [10,15,20,30],
        backgroundColor: "#ec6e4c",
        borderColor: "#ec6e4c",
        fill: false,
        lineTension: 0.3,
        radius: 5
      } */
    ]
  };

  //options
  var options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
  },
    title: {
      display: true,
      position: "top",
      text: "Line Graph",
      fontSize: 18,
      fontColor: "#111"
    },
    plugins: {
      legend: {
          display: false
      }
  }
  };

  //create Chart class object
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
  });

  function updateConfigByMutating() {
    chart.update();
}

   /*  const mydonut = new Chart(line_g, {
        type: 'line',
        data: {
            labels: Object.keys(data),
            datasets: [
                {
                    label: 'Home Team',
                    data: [10,24,10,15],
                    borderColor: Utils.CHART_COLORS.red,
                    backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
                  },
                  {
                    label: 'Away Team',
                    data: Utils.numbers(NUMBER_CFG),
                    borderColor: Utils.CHART_COLORS.blue,
                    backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
                  }
            ],
        },
        options: {
            // ... Other options
            backgroundColor: [
                'rgba(0, 83, 159, 1)',  // Bar 1
                'rgba(255, 255, 255, 1)',  // Bar 2
                'rgba(204, 205, 207, 1)',  // Bar 3
                'rgba(246, 178, 30, 1)',  // Bar 4
                'rgba(252, 227, 172, 1)', // Bar 5
                'rgba(136, 140, 144, 1)'   // Bar 6
            ],
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            },
            maintainAspectRatio: true,
            responsive: true,
            aspectRatio:2,
            clip: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'rgb(0,0,0)'
                    }, position: "right"
            }}
  }
  
    });




const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        }
      }
    },
  };



  const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
    {
      label: 'Dataset 2',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    }
  ]
};  */
