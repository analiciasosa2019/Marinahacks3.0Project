app.component('summary',{
    template: 
    /*html*/
    `
    <div> </div> 
    <spider-chart></spider-chart>

    {{test}}
    
    `,
    data(){
        return{
            test: "test",
            data: {
                moredata: "S"
            }

        }
    }, 
    method:{
    }

})