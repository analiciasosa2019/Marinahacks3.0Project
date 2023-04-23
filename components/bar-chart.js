app.component('barChart', {
    template:
      /*html*/
      `
      <canvas ref="barChart"></canvas>
      `,
    data() {
      return {
        test: 'bar-chart',
        barData: {
          math: {2022: 78, 2021: 76, 2020: 80},
          english: {2022: 85, 2021: 82, 2020: 79},
          science : {2022: 82, 2021: 77, 2020: 84},
          history: {2022: 80, 2021: 78, 2020: 73}
        }
      }
    },
    watch:{
      barData(newData, oldData){
        const barcanvas = this.$refs.barChart;
        const chartbar = this.$data.chartbar;
        if(chartbar){
          chartbar.destroy();
        }
        this.$data.chartbar = new Chart(barcanvas, {
          type: 'line',
          data: {
            labels: Object.keys(newData.math),
            datasets: [
              {
                label: "Math",
                data: Object.values(newData.math),
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 3
              },
              {
                label: "English",
                data: Object.values(newData.english),
                fill: false,
                borderColor: 'rgba(100, 99, 172, 1)',
                borderWidth: 3
              },
              {
                label: "Science",
                data: Object.values(newData.science),
                fill: false,
                borderColor: 'rgba(2, 195, 132, 1)',
                borderWidth: 3
              },
              {
                label: "History",
                data: Object.values(newData.history),
                fill: false,
                borderColor: 'rgba(0, 99, 132, 255)',
                borderWidth: 3
              }
            ]
          },
          options: {
            maintainAspectRatio: false,
            scales: {
              y: {
                suggestedMin: 50,
                suggestedMax: 100
              }
            }
          }
        });
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
        window.mitt.on('studentData', (studentData) => {
          console.log("mitt recieved!", studentData)
          this.barData = studentData.gradeHistory
        })
     
    }
  });

  