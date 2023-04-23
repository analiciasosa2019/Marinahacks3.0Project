app.component('barChart', {
    template:
      /*html*/
      `
      <canvas ref="barChart"></canvas>
      `,
    data() {
      return {
        test: 'bar-chart',
        barData: {math: {2022: 78, 2021: 76, 2020: 80},
        english: {2022: 85, 2021: 82, 2020: 79},
        science : {2022: 82, 2021: 77, 2020: 84},
        history: {2022: 80, 2021: 78, 2020: 73}}
      }
    },
    methods:{          
          // extract values into list
          /*years: Object.keys(this.barData.math),
          valuesByYear: years.map(year => {
            const values = {};
            for (const key in grades) {
              values[key] = grades[key][year];
            }
            return values;
          })*/
    },

    mounted() {
        window.mitt.on('Gradedata', (sentData) => {
        console.log("mitt recieved!", sentData)
        //barData=sentData
        })
      const barcanvas = this.$refs.barChart;    
        const chartbar = new Chart(barcanvas, {
            type: 'line', // Specify the chart type
            data: {
              labels: 
                Object.keys(this.barData.math)
              , // Specify the labels for the axes
              datasets: [
                {
                  label: "Math", // Specify the legend label for the dataset
                  data: Object.values(this.barData.math), // Specify the data for the axes
                  fill: false, // Specify that the area under the line should be filled
                  //backgroundColor: 'rgba(255, 99, 132, 0.2)', // Specify the background color for the area
                  borderColor: 'rgba(255, 99, 132, 1)', // Specify the border color for the area
                  borderWidth: 1 // Specify the border width for the area
                },
                {
                  label: "English", // Specify the legend label for the dataset
                  data: Object.values(this.barData.english), // Specify the data for the axes
                  fill: false, // Specify that the area under the line should be filled
                  //backgroundColor: 'rgba(255, 99, 132, 0.2)', // Specify the background color for the area
                  borderColor: 'rgba(100, 99, 172, 1)', // Specify the border color for the area
                  borderWidth: 1 // Specify the border width for the area
                },            
                {
                  label: "Science", // Specify the legend label for the dataset
                  data: Object.values(this.barData.science), // Specify the data for the axes
                  fill: false, // Specify that the area under the line should be filled
                  //backgroundColor: 'rgba(255, 99, 132, 0.2)', // Specify the background color for the area
                  borderColor: 'rgba(2, 195, 132, 1)', // Specify the border color for the area
                  borderWidth: 1 // Specify the border width for the area
                },            
                {
                  label: "History", // Specify the legend label for the dataset
                  data: Object.values(this.barData.history), // Specify the data for the axes
                  fill: false, // Specify that the area under the line should be filled
                  //backgroundColor: 'rgba(255, 99, 132, 0.2)', // Specify the background color for the area
                  borderColor: 'rgba(0, 99, 132, 255)', // Specify the border color for the area
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

  