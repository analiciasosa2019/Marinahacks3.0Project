app.component('summaryPage',{
    template: 
    /*html*/
    `
    <div>
    <div class = "title">{{pageTitle}} </div>
    <spider-chart></spider-chart>
    </div>
    
    
    `,
    data(){
        return{
            pageTitle: "Student Summary",
          

        }
    }, 
    method:{
    }

})