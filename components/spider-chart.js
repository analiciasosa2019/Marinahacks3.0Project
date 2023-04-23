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
        chart: "",
        type: "Learning Types",
        labels: [],
        backgroundColor: "",
        borderColor: "",
        chartData: [],
        chartData1: [],
        chartData2: [],
        chartData3: [],
        avgData: null
      };
    },
    methods:{
        setType(newType){
            this.type = newType;
            console.log("new type", this.type)
            this.create(this.type)
        },
        create(type) {
            // Create a new chart instance
            if (this.chart) {
                this.chart.destroy();
            }
            //const canvas = this.type === "Learning Types" ? this.$refs.chart1 : this.type === "Intelligence Types" ? this.$refs.chart2: this.$refs.chart3;
            let canvas = null;
            let chartData, labels, backgroundColor, borderColor;
            switch (this.type) {
                case 'Learning Types':
                  canvas = this.$refs.chart1;
                  this.chartData = this.chartData1;
                  this.labels = ['Visual', 'Kinaesthetic', 'Aural', 'Social', 'Solitary', 'Verbal', 'Logical'];
                  this.backgroundColor = 'rgba(255, 99, 132, 0.2)';
                  this.borderColor = 'rgba(255, 99, 132, 1)';
                  break;
                case 'Intelligence Types':
                  canvas = this.$refs.chart2;
                  this.chartData = this.chartData2;
                  this.labels = ['Naturalist', 'Musical', 'Logical/Mathematical', 'Existential', 'Interpersonal', 'Bodily/Kinesthetic', 'Linguistic', 'Intrapersonal'];
                  this.backgroundColor = 'rgba(54, 162, 235, 0.2)';
                  this.borderColor = 'rgba(54, 162, 235, 1)';
                  break;
                case 'Team Personalitys':
                  canvas = this.$refs.chart3;
                  this.chartData = this.chartData3;
                  this.labels = ['Pioneer', 'Guardian', 'Driver', 'Integrator'];
                  this.backgroundColor = 'rgba(75, 192, 192, 0.2)';
                  this.borderColor = 'rgba(75, 192, 192, 1)';
                  break;
                default:
                  canvas = this.$ref.chart3;
                  this.chartData = this.chartData3;
                  this.labels = ['Pioneer', 'Guardian', 'Driver', 'Integrator'];
                  this.backgroundColor = 'rgba(75, 192, 192, 0.2)';
                  this.borderColor = 'rgba(75, 192, 192, 1)';
                  break;
              }
              this.chart = new Chart(canvas, {
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
        this.create(this.type);
        
         // add studentId
      
    },
  });

  