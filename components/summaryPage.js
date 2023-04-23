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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdpokxdWowVY-xedPWN3W0YiECIg470Barg&usqp=CAU" width="100" height="100">
                <h2>{{ selectedStudent.name }}</h2>
                <!-- Display other student information here -->
                <h3>Teachers: {{selectedStudent.teachers}}</h3>
                <h3>Grade History: {{selectedStudent.gradeHistory}}</h3>
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
        this.$emit('student-selected', student);
      },
    },
  });
  