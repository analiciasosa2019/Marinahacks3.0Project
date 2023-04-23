app.component('spider-chart', {
    template:
      /*html*/
      `
      <canvas ref="myChart"></canvas>
      <canvas ref="barChart"></canvas>
      `,
    data() {
      return {
        test: 'spider-chart',
        barData: {math: {2022: 78, 2021: 76, 2020: 80},
        english: {2022: 85, 2021: 82, 2020: 79},
        science : {2022: 82, 2021: 77, 2020: 84},
        history: {2022: 80, 2021: 78, 2020: 73}}
      };
    },
    mounted() {
        window.mitt.on('Student data', (avgData) => {
          console.log("mitt recieved!")
        })
        window.mitt.on('Student grades', (gradeData) => {
          console.log("mitt recieved!")
        })
      const canvas = this.$refs.myChart;
      const barcanvas = this.$refs.barChart;
      // Create a new chart instance
      const chart = new Chart(canvas, {
        type: 'radar', // Specify the chart type
        data: {
          labels: [
            'Naturalist',
            'Musical',
            'Logical Mathematical',
            'Existential',
            'Interpersonal',
            'Bodily Kinesthetic',
            "Linguistic",
            "Intrapersonal"
          ], // Specify the labels for the axes
          datasets: [
            {
              label: 'Intelligence Type', // Specify the legend label for the dataset
              data: [85, 70, 95, 80, 75, 80], // Specify the data for the axes
              fill: true, // Specify that the area under the line should be filled
              backgroundColor: 'rgba(255, 99, 132, 0.2)', // Specify the background color for the area
              borderColor: 'rgba(255, 99, 132, 1)', // Specify the border color for the area
              borderWidth: 1 // Specify the border width for the area
            }
          ]
        },
        options: {
          scales: {
            r: {
              angleLines: {
                display: false // Hide the lines radiating from the center
              },
              suggestedMin: 10, // Specify the minimum value for the axes
              suggestedMax: 100 // Specify the maximum value for the axes
            }
          }
        }
      })
      /*math: {2022: 78, 2021: 76, 2020: 80},
                        english: {2022: 85, 2021: 82, 2020: 79},
                        science : {2022: 82, 2021: 77, 2020: 84},
                        history: {2022: 80, 2021: 78, 2020: 73}*/
      const chartbar = new Chart(barcanvas, {
        type: 'line', // Specify the chart type
        data: {
          labels: 
            Object.keys(this.barData.math)
          , // Specify the labels for the axes
          datasets: [
            {
              label: Object.values(this.barData.math), // Specify the legend label for the dataset
              data: Object.values(this.barData.math), // Specify the data for the axes
              fill: false, // Specify that the area under the line should be filled
              backgroundColor: 'rgba(255, 99, 132, 0.2)', // Specify the background color for the area
              borderColor: 'rgba(255, 99, 132, 1)', // Specify the border color for the area
              borderWidth: 1 // Specify the border width for the area
            },
            {
              label: Object.values(this.barData), // Specify the legend label for the dataset
              data: [85, 70, 95, 80, 75, 80], // Specify the data for the axes
              fill: false, // Specify that the area under the line should be filled
              backgroundColor: 'rgba(255, 99, 132, 0.2)', // Specify the background color for the area
              borderColor: 'rgba(255, 99, 132, 1)', // Specify the border color for the area
              borderWidth: 1 // Specify the border width for the area
            },            
            {
              label: Object.values(this.barData), // Specify the legend label for the dataset
              data: [85, 70, 95, 80, 75, 80], // Specify the data for the axes
              fill: false, // Specify that the area under the line should be filled
              backgroundColor: 'rgba(255, 99, 132, 0.2)', // Specify the background color for the area
              borderColor: 'rgba(255, 99, 132, 1)', // Specify the border color for the area
              borderWidth: 1 // Specify the border width for the area
            },            
            {
              label: Object.values(this.barData), // Specify the legend label for the dataset
              data: [85, 70, 95, 80, 75, 80], // Specify the data for the axes
              fill: false, // Specify that the area under the line should be filled
              backgroundColor: 'rgba(255, 99, 132, 0.2)', // Specify the background color for the area
              borderColor: 'rgba(255, 99, 132, 1)', // Specify the border color for the area
              borderWidth: 1 // Specify the border width for the area
            }
          ]
        },
        options: {
          scales: {
            y: {
              suggestedMin: 10, // Specify the minimum value for the axes
              suggestedMax: 100 // Specify the maximum value for the axes
            }
          }
        }
      });
    }
  });
  