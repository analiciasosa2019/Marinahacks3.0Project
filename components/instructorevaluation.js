app.component('instructorevaluation',{
    template: 
    /*html*/
    `
    <div class = "instructEval">
    <div class = "title">{{title}}</div><br>
    <div class = "eval"><img class = "intelligenceImage" src = "assets/pic.png"></div>
    
    <div v-for="trait in traits" class="testBox2">
  <span v-text="'This student shows a lot of ' + trait + ' Intelligence:'"></span>
  <div style="margin: 20px;">
    <div style="display: flex; justify-content: space-between;">
      <span>Strongly Disagree</span>
      <span>Disagree</span>
      <span>Neutral</span>
      <span>Agree</span>
      <span>Strongly Agree</span>
    </div>
    <input type="range" min="1" max="7" v-model="sliderName[trait]" class="scrollbar">
  </div>
 
</div>
<div class = "submitButton"><button class = "navButton" @click = "submit">Submit</button></div>
</div>



    
    `,
    data(){
        return{
            sliderName: "",
            title: "Instructor Evaluation",
            traits: ["bodily kinesthetic", "linguistic", "intrapersonal","spatial","natural","","logical mathematical","existential", "interpersonal"]
        }
    }, 
    method:{
        submit(){
            console.log("Submit Button Clicked")
        }
    }

})