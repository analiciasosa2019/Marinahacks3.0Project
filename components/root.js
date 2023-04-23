app.component('root',{
    template: 
    /*html*/
    ` 
    <nav>
      <button class = "navButton" @click = "navclick('summary')">Summary</button> 
      <button class = "navButton" @click = "navclick('instructorevauation')">Evaluation</button>
      <button class = "navButton" @click = "navclick('testTeam')">Team Test</button>
      <button class = "navButton" @click = "navclick('testMI')">Learning Type Test</button>
      <button class = "navButton" @click = "navclick('testTEI')">Intelligence Type Test</button>
      <button class = "navButton" @click = "navclick('lessonchat')">Lesson Chat</button>
  </nav>

    <div v-show = "page == 'summary'"><summaryPage></summaryPage></div>
    <div v-show = "page == 'instructorevauation'"><instructorevaluation></instructorevaluation></div> 
    <div v-show = "page == 'lessonchat'"> <lessonchat></lessonchat> </div> 
    <div v-show = "page == 'testMI'"><testMI></testMI></div> 
    <div v-show = "page == 'testTeam'"><testTeam></testTeam></div> 
    `,
    data(){
        return{
            page: "summary"
        }
    }, 
    methods:{
        navclick(pageName){
            console.log("Button Click:" + pageName)
            this.page = pageName
        }
    }

})