app.component('summaryPage',{
    template: 
    /*html*/
    `
    <div class = "title">{{pageTitle}}</div>
    <div class = "summaryOuterBox">
        <div class = "graphArea">
            <div class = "spiderChartArea">
                <spider-chart></spider-chart>
            </div>
            <div class = "lineGraphArea">
                <barChart></barChart>
            </div>
        </div>
        <div class = "studentListArea">
            <div class = "studentInfo"></div>
            <div class = "studentList">

            </div>
        </div>
        
    </div>
    `,
    data(){
        return{
            pageTitle: "Student Summary"
        }
    }, 
    props:{
        studentList: Array,
    },
    method:{
        emitStudent(){
            obj = {
                
            }
            window.mitt.on("studentData",obj)
        }
    },

})