// Trait Emotional Intelligence Test
// Questions are 1-7, strongly disagree to strongly agree
// Score is the average of all answers

app.component('testTEI',{
    template: 
    /*html*/
    ` 
    <div class = "testPage">
        <div class = "title">{{title}}</div>
        <div class = "testBox">
            <div style = "align-items: center" v-show = "currentQuestion == 0">
                <div class="testTitle">Begin Intellegence Type Test</div>
                <button @click = "nextQ" class = "basicButton">Begin Now</button>
            </div>
            <div style = "width:90%" v-show = "currentQuestion != 0">
                Question {{ currentQuestion }}: {{ currentQuestionText }}
                <div style="margin: 20px; width: 100%">
                    <div style="display: flex; justify-content: space-between;">
                        <span>Strongly Disagree</span>
                        <span>Disagree</span>
                        <span>Neutral</span>
                        <span>Agree</span>
                        <span>Strongly Agree</span>
                    </div>
                <input type="range" min="1" max="7" v-model="sliderName" style="width: 100%">
                </div>
                <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
                    <button @click = "nextQ" style="margin: 50px; padding: 10px 20px; border-radius: 5px; background-color: purple; color: white; border: none; cursor: pointer;">Next</button>
                </div>
            </div>
        </div>
        <div class = "testBox">
            <div style = "align-items: center" v-show = "currentQuestion == 0">
                <div class="testTitle">Begin Teamwork Type Test</div>
                <button @click = "nextQ" class = "basicButton">Begin Now</button>
            </div>
        </div>

        <div class = "testBox">
            <div style = "align-items: center" v-show = "currentQuestion == 0">
                <div class="testTitle">Begin Teamwork Type Test</div>
                <button @click = "nextQ" class = "basicButton">Begin Now</button>
            </div>
    `,
    data(){
        return{
            title: "Intellegence Type Evaluation",
            sliderName: "",
            quizCompleted: false,
            currentQuestion: 0,
            questions:
                {
                0: {text: "",reverseScore:false, answer:false, sliderName: "Begin"},
                1: { text: "Expressing my emotions with words is not a problem for me.", reverseScore: false, answer: false, sliderName: "a" },
                2: { text: "I often find it difficult to see things from another person’s viewpoint.", reverseScore: true, answer: null, sliderName: "b" },
                3: { text: "On the whole, I’m a highly motivated person.", reverseScore: false, answer: null, sliderName: "c" },
                4: { text: "I usually find it difficult to regulate my emotions.", reverseScore: true, answer: null, sliderName: "d" },
                5: { text: "I generally don’t find life enjoyable.", reverseScore: true, answer: null, sliderName: "e" },
                6: { text: "I can deal effectively with people.", reverseScore: false, answer: null, sliderName: "f" },
                7: { text: "I tend to change my mind frequently.", reverseScore: true, answer: null, sliderName: "g" },
                8: { text: "Many times, I can’t figure out what emotion I'm feeling.", reverseScore: true, answer: null, sliderName: "h" },
                9: { text: "I feel that I have a number of good qualities.", reverseScore: false, answer: null, sliderName: "i" },
                10: { text: "I often find it difficult to stand up for my rights.", reverseScore: true, answer: null, sliderName: "j" },
                11: { text: "I’m usually able to influence the way other people feel.", reverseScore: false, answer: null, sliderName: "k" },
                12: { text: "On the whole, I have a gloomy perspective on most things.", reverseScore: true, answer: null, sliderName: "l" },
                13: { text: "Those close to me often complain that I don’t treat them right.", reverseScore: true, answer: null, sliderName: "m" },
                14: { text: "I often find it difficult to adjust my life according to the circumstances.", reverseScore: true, answer: null, sliderName: "n" },
                15: { text: "On the whole, I’m able to deal with stress.", reverseScore: false, answer: null, sliderName: "o" },
                16: { text: "I often find it difficult to show my affection to those close to me.", reverseScore: true, answer: null, sliderName: "p" },
                17: { text: "I’m normally able to “get into someone’s shoes” and experience their emotions.", reverseScore: false, answer: null, sliderName: "q" },
                18: { text: "I normally find it difficult to keep myself motivated.", reverseScore: true, answer: null, sliderName: "r" },
                19: { text: "I’m usually able to find ways to control my emotions when I want to.", reverseScore: false, answer: null, sliderName: "s" },
                20: { text: "On the whole, I’m pleased with my life.", reverseScore: false, answer: null, sliderName: "t" },
                21: { text: "I would describe myself as a good negotiator.", reverseScore: false, answer: null, sliderName: "u" },
                22: { text: "I tend to get involved in things I later wish I could get out of.", reverseScore: true, answer: null, sliderName: "v" },
                23: { text: "I often pause and think about my feelings.", reverseScore: false, answer: null, sliderName: "w" },
                24: { text: "I believe I’m full of personal strengths.", reverseScore: false, answer: null, sliderName: "x" },
                25: { text: "I tend to “back down” even if I know I’m right.", reverseScore: true, answer: null, sliderName: "y" },
                26: { text: "I don’t seem to have any power at all over other people’s feelings.", reverseScore: true, answer: null, sliderName: "z" },
                27: { text: "I generally believe that things will work out fine in my life.", reverseScore: false, answer: null, sliderName: "aa" },
                28: { text: "I find it difficult to bond well even with those close to me.", reverseScore: true, answer: null, sliderName: "ab" },
                29: { text: "Generally, I’m able to adapt to new environments.", reverseScore: false, answer: null, sliderName: "ac" },
                30: { text: "Others admire me for being relaxed.", reverseScore: false, answer: null, sliderName: "ad" }}
        }
    },
    methods:{      
        logSliderValue() {
            return questions[1].sliderName.value
          },
        nextQ(){
            this.currentQuestion += 1;
            //console.log(this.currentQuestion)
        }
    },
    computed:{
        value(){
            let value = 0
            for (key in this.questions) {
                if(this.questions[key].reverseScore === true) {
                    value += (7-this.questions[key].value)
                } else {
                    value += this.questions[key].value
                }
            }
            return value
        },
        answers(){
            this.questions[1].answer = this.sliderValue
            answers = this.questions[1].sliderValue
            return answers    
        },
        currentQuestionText(){
            return this.questions[this.currentQuestion].text
        }
        
    }
})