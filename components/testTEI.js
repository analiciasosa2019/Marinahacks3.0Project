// Trait Emotional Intelligence Test
// Questions are 1-7, strongly disagree to strongly agree
// Score is the average of all answers

app.component('testTEI',{
    template: 
    /*html*/
    ` 
    <p>Question 1: {{questions[1].text}}</p>
    <p>Strongly Disagree <input type="range" min="1" max="7" v-model="sliderValue" /> Strongly Agree</p>
    {{questions}}
    `,
    data(){
        return{
        
        sliderValue: 4,
        questions:
            {1: { text: "Expressing my emotions with words is not a problem for me.", reverseScore: false, answer: false},
            2: { text: "I often find it difficult to see things from another person’s viewpoint.", reverseScore: true, answer: null },
            3: { text: "On the whole, I’m a highly motivated person.", reverseScore: false, answer: null },
            4: { text: "I usually find it difficult to regulate my emotions.", reverseScore: true, answer: null },
            5: { text: "I generally don’t find life enjoyable.", reverseScore: true, answer: null },
            6: { text: "I can deal effectively with people.", reverseScore: false, answer: null },
            7: { text: "I tend to change my mind frequently.", reverseScore: true, answer: null },
            8: { text: "Many times, I can’t figure out what emotion I'm feeling.", reverseScore: true, answer: null },
            9: { text: "I feel that I have a number of good qualities.", reverseScore: false, answer: null },
            10: { text: "I often find it difficult to stand up for my rights.", reverseScore: true, answer: null },
            11: { text: "I’m usually able to influence the way other people feel.", reverseScore: false, answer: null },
            12: { text: "On the whole, I have a gloomy perspective on most things.", reverseScore: true, answer: null },
            13: { text: "Those close to me often complain that I don’t treat them right.", reverseScore: true, answer: null },
            14: { text: "I often find it difficult to adjust my life according to the circumstances.", reverseScore: true, answer: null },
            15: { text: "On the whole, I’m able to deal with stress.", reverseScore: false, answer: null },
            16: { text: "I often find it difficult to show my affection to those close to me.", reverseScore: true, answer: null },
            17: { text: "I’m normally able to “get into someone’s shoes” and experience their emotions.", reverseScore: false, answer: null },
            18: { text: "I normally find it difficult to keep myself motivated.", reverseScore: true, answer: null },
            19: { text: "I’m usually able to find ways to control my emotions when I want to.", reverseScore: false, answer: null },
            20: { text: "On the whole, I’m pleased with my life.", reverseScore: false, answer: null },
            21: { text: "I would describe myself as a good negotiator.", reverseScore: false, answer: null },
            22: { text: "I tend to get involved in things I later wish I could get out of.", reverseScore: true, answer: null },
            23: { text: "I often pause and think about my feelings.", reverseScore: false, answer: null },
            24: { text: "I believe I’m full of personal strengths.", reverseScore: false, answer: null },
            25: { text: "I tend to “back down” even if I know I’m right.", reverseScore: true, answer: null },
            26: { text: "I don’t seem to have any power at all over other people’s feelings.", reverseScore: true, answer: null },
            27: { text: "I generally believe that things will work out fine in my life.", reverseScore: false, answer: null },
            28: { text: "I find it difficult to bond well even with those close to me.", reverseScore: true, answer: null },
            29: { text: "Generally, I’m able to adapt to new environments.", reverseScore: false, answer: null },
            30: { text: "Others admire me for being relaxed.", reverseScore: false, answer: null }},
        quizCompleted: false,
        currentQuestion: 1
        }
    },
    method:{      
        NextQuestion() {
            if (currentQuestion.value < questions.value.length - 1) {
                currentQuestion.value++
                return
            }
        },
        logSliderValue() {
            return this.sliderValue
          }
        

    },
    computed:{
        value(){
            //replace 1 with the answer of the question
            let value = 0
            if(this.questions[this.currentQuestion].reverseScore === true) {
                value += (7-this.currentQuestion.answer)
            } else {
                value += this.currentQuestion.answer
            }
            return value
        },
        answers(){
            this.questions[1].answer = this.sliderValue
            answers = this.questions[1].sliderValue
            return answers    
        }
    }
})