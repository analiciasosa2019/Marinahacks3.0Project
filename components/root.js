app.component('root',{
    template: 
    /*html*/
    `
    <div v-show = "page == 'Summary'" > </div> 
    <div v-show = "page == 'instructorevaluation'" > </div> 
    {{test}}
    `,
    data(){
        return{
            test: "hellooooo",
            page: "Summary"
        }
    }, 
    method:{
        
    }

})