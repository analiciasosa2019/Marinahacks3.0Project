app.component('root',{
    template: 
    /*html*/
    `
    <div v-show = "page == 'Summary'" > </div> 
    <div v-show = "page == 'spider-chart'" > </div> 
    <spider-chart></spider-chart>
    `,
    data(){
        return{
            test: "hellooooo",
            page: "spider-chart"
        }
    }, 
    method:{
        
    }

})