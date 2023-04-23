app.component('summaryPage',{
    template: 
    /*html*/
    `
    <div class = "title">{{pageTitle}}</div>
    <div class = "summaryOuterBox">
        <div class = "graphArea">
            <div class = "spiderChartArea">
            </div>
            <div class = "lineGraphArea">

            </div>
        </div>
        <div class = "studentListArea">
            <div class = "studentInfo"></div>
            <div class = "studentList"></div>
        </div>
        
    </div>
    `,
    data(){
        return{
            pageTitle: "Student Summary"
        }
    }, 
    method:{
    }

})