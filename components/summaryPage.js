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
                <ul>
                <li
                    v-for="student in sortedStudentList"
                    :key="student.id"
                    @click="selectStudent(student)"
                    :class="{ 'highlighted': selectedStudent && selectedStudent.id === student.id }"
                >
                    {{ student.name }}
                </li>
                </ul>
            </div>
        </div>
        
    </div>
    `,
    props: {
      pageTitle: {
        type: String,
        required: true,
      },
      studentList: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        selectedStudent: null,
      };
    },
    computed: {
      sortedStudentList() {
        return [...this.studentList].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      },
    },
    methods: {
      selectStudent(student) {
        this.selectedStudent = student;
        this.$emit('student-selected', student);
      },
    },
  });
  