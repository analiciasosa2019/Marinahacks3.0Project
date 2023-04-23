app.component('spider-chart', {
    template:
      /*html*/
      `
      <div v-show = "type == 'Learning Types'">
        <canvas ref="chart1"></canvas>
      </div>
      <div v-show = "type == 'Intelligence Types'">
        <canvas ref="chart2"></canvas>
      </div>
      <div v-show = "type == 'Team Personalitys'">
        <canvas ref="chart3"></canvas>
      </div>
      
      <button @click="setType('Learning Types')">Learning Types</button>
      <button @click="setType('Intelligence Types')">Intelligence Types</button>
      <button @click="setType('Team Personalitys')">Team Personality</button>
      `,
    data() {
      return {
        test: 'spider-chart',
        type: "Team Personalitys",
        labels: [],
        backgroundColor: "",
        borderColor: "",
        chartData: [],
        chartData1: [],
        chartData2: [],
        chartData3: []
      };
    },
    methods:{
        setType(newType){
            this.type = newType;
            console.log("new type", this.type)
            this.create(this.type)
        },
        create(newType) {
            // Create a new chart instance
            const canvas = this.type === "Learning Types" ? this.$refs.chart1 : this.type === "Intelligence Types" ? this.$refs.chart2: this.$refs.chart3;

            let chartData, labels, backgroundColor, borderColor;
            switch (this.type) {
                case 'Learning Types':
                  chartData = this.chartData1;
                  labels = ['Visual', 'Kinaesthetic', 'Aural', 'Social', 'Solitary', 'Verbal', 'Logical'];
                  backgroundColor = 'rgba(255, 99, 132, 0.2)';
                  borderColor = 'rgba(255, 99, 132, 1)';
                  break;
                case 'Intelligence Types':
                  chartData = this.chartData2;
                  labels = ['Naturalist', 'Musical', 'Logical/Mathematical', 'Existential', 'Interpersonal', 'Bodily/Kinesthetic', 'Linguistic', 'Intrapersonal'];
                  backgroundColor = 'rgba(54, 162, 235, 0.2)';
                  borderColor = 'rgba(54, 162, 235, 1)';
                  break;
                case 'Team Personalitys':
                  chartData = this.chartData3;
                  labels = ['Pioneer', 'Guardian', 'Driver', 'Integrator'];
                  backgroundColor = 'rgba(75, 192, 192, 0.2)';
                  borderColor = 'rgba(75, 192, 192, 1)';
                  break;
                default:
                    chartData = this.chartData3;
                    labels = ['Pioneer', 'Guardian', 'Driver', 'Integrator'];
                    backgroundColor = 'rgba(75, 192, 192, 0.2)';
                    borderColor = 'rgba(75, 192, 192, 1)';
                    break;
              }
              const chart = new Chart(canvas, {
                type: "radar",
                data: {
                  labels: labels,
                  datasets : [
                    {
                      label: this.type,
                      data: chartData,
                      fill: true,
                      backgroundColor: backgroundColor,
                      borderColor: borderColor,
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
        const studentLearning = avgData.learning;
        const studentIntelligence = avgData.intelligence;
        const teamPersonality = avgData.team;
        this.chartData1 = [
            studentLearning.visual,
            studentLearning.kinaesthetic,
            studentLearning.aural,
            studentLearning.social,
            studentLearning.solitary,
            studentLearning.verbal,
            studentLearning.logical,
        ];
        this.chartData2 = [
            studentIntelligence.naturalist,
            studentIntelligence.musical,
            studentIntelligence.logical_mathematical,
            studentIntelligence.existential,
            studentIntelligence.interpersonal,
            studentIntelligence.bodily_kinesthetic,
            studentIntelligence.linguistic,
            studentIntelligence.intrapersonal,
        ];
        this.chartData3 = [
            teamPersonality.pioneer,
            teamPersonality.guardian,
            teamPersonality.driver,
            teamPersonality.integrator
        ]
        this.create(this.type); // add studentId
      
    }
  });

  