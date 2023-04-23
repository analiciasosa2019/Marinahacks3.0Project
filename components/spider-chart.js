app.component('spider-chart', {
  template:
    /*html*/
    `
    <canvas ref="myChart"></canvas>
    `,
  data() {
    return {
      test: 'spider-chart'
    };
  },
  mounted() {
    const canvas = this.$refs.myChart;

    // Create a new chart instance
    const chart = new Chart(canvas, {
      type: 'radar', // Specify the chart type
      data: {
        labels: [
          'Strength',
          'Speed',
          'Agility',
          'Intelligence',
          'Stamina',
          'Durability'
        ], // Specify the labels for the axes
        datasets: [
          {
            label: 'Intellegence Chart', // Specify the legend label for the dataset
            data: [85, 70, 95, 80, 75, 80], // Specify the data for the axes
            fill: true, // Specify that the area under the line should be filled
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Specify the background color for the area
            borderColor: 'rgba(255, 99, 132, 1)', // Specify the border color for the area
            borderWidth: 1 // Specify the border width for the area
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: {
              display: false // Hide the lines radiating from the center
            },
            suggestedMin: 50, // Specify the minimum value for the axes
            suggestedMax: 100 // Specify the maximum value for the axes
          }
        }
      }
    });
  }
});