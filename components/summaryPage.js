app.component('summaryPage', {
    template:
    /*html*/
    `
    <div class="title">{{pageTitle}}</div>
    <div class="summaryOuterBox">
        <div class="graphArea">
            <div class="spiderChartArea">
                <spider-chart></spider-chart>
            </div>
            <div class="lineGraphArea">
                <div class = "barChartWrapper"><barChart></barChart></div>
            </div>
        </div>
        
        <div class="studentListArea">
            <div class="studentInfo">
                <div v-if="selectedStudent">
                <h2>{{ selectedStudent.name }}</h2>
                <!-- Display other student information here -->
                </div>
            </div>
            
            <div class="studentList">
                <div class = "studentBox"
                    v-for="student in studentList"
                    :key="student.id"
                    @click="selectStudent(student)"
                    :style="{ backgroundColor: selectedStudent && selectedStudent.id === student.id ? 'purple' : '' }">
                    {{ student.name }}
                    </div>
                
            </div>
        </div>
        
    </div>
    `,
    props: {
      studentList: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        pageTitle: "Student Summary",
        selectedStudent: "",
      };
    },
    computed: {
    
    },
    methods: {
      selectStudent(student) {
        this.selectedStudent = student;
       // console.log("mitt sent")
       window.mitt.emit('studentData', student);

      },
    },
  });
  