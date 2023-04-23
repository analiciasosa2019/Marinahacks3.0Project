app.component('spider-chart', {
    template:
      /*html*/
      `
      <canvas ref="myChart"></canvas>
      `,
    data() {
      return {
        test: 'spider-chart',
        chartData1: [],
        chartData2: []
      };
    },
    methods:{
        create(studentId) {
            // Create a new chart instance
            const canvas = this.$refs.myChart;
            const student = studentList[studentId]
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

  