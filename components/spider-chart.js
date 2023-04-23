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
        chartData1: [],
        chartData2: [],
        barData: {math: {2022: 78, 2021: 76, 2020: 80},
        english: {2022: 85, 2021: 82, 2020: 79},
        science : {2022: 82, 2021: 77, 2020: 84},
        history: {2022: 80, 2021: 78, 2020: 73}}
      };
    },
    methods:{
        create(studentId) {
              // Create a new chart instance
              window.mitt.on('Student grades', (gradeData) => {
          console.log("mitt recieved!")
        })
      const canvas = this.$refs.myChart;
      const barcanvas = this.$refs.barChart;            const student = studentList[studentId]
            const chart = new Chart(canvas, {
                type: "radar",
                data: {
                    labels: [ "Visual", "Kinaesthetic","Aural","Social","Solitary", "Verbal", "Logical"],
                    datasets : [
                        {
                            label: "Learning Types",
                            data: this.chartData1,
                            fill: true,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1
                        },
                        {
                            label: "Intelligence Types",
                            data: this.chartData2,
                            fill: true,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1
                        },
                    ]
                },
                options: {
                    scales: {
                        r: {
                          angleLines: {
                            display: false
                          },
                          suggestedMin: 1,
                          suggestedMax: 10
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
    },

    mounted() {
        window.mitt.on('Studentdata', (avgData) => {
        console.log("mitt recieved!", avgData)
        })
        this.chartData1 = [
            avgData.learning.visual,
            avgData.learning.kinaesthetic,
            avgData.learning.aural,
            avgData.learning.social,
            avgData.learning.solitary,
            avgData.learning.verbal,
            avgData.learning.logical,
            // student.learning.visual,
            // avgData.learning.kinaesthetic,
            // avgData.learning.aural,
            // avgData.learning.social,
            // avgData.learning.solitary,
            // avgData.learning.verbal,
            // avgData.learning.logical,
        ];
        this.chartData2 = [
            avgData.intelligence.naturalist,
            avgData.intelligence.musical,
            avgData.intelligence.logical_mathematical,
            avgData.intelligence.existential,
            avgData.intelligence.interpersonal,
            avgData.intelligence.bodily_kinesthetic,
            avgData.intelligence.linguistic,
            avgData.intelligence.intrapersonal,
        ];

        this.create(studentId);
      
    }
  });

  