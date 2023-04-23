app.component('summaryPage',{
    template: 
    /*html*/
    `
    {{pageTitle}} 
    <spider-chart></spider-chart>
    
    
    `,
    data(){
        return{
            pageTitle: "Summary",
            data: {
                moredata: "S"
            }

        }
    }, 
    method:{
    }

})